import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useInstructors from "../../hooks/useInstructors";

const UpdateMyClass = () => {
  const oldData = useLoaderData();
  const { _id, category } = oldData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [, refetch] = useInstructors();

  const onSubmit = (data) => {
    const sendData = {
      students: data.students,
      price: data.price,
    };
    console.log(sendData);
    Swal.fire({
      title: "Do You Really Want to Update?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/email${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(sendData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Class Updated successfully.");
            }
          });
      }
    });
  };
  return (
    <div className="lg:w-[575px] w-[375px] my-[45px] mx-auto">
      <h1 className="mb-[35px] text-3xl text-center">Update {category}</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-cyan-200 bg-opacity-30 rounded-xl p-5 "
      >
        <div className="card-body grid grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seat</span>
            </label>
            <input
              type="number"
              name="students"
              {...register("students", { required: true })}
              placeholder="Enter available seats"
              className="input input-bordered"
            />
            {errors.students && (
              <span className="text-orange-400 mt-2">Updated seat amount</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              {...register("price", { required: true })}
              placeholder="Enter price here"
              className="input input-bordered"
            />
            {errors.price && (
              <span className="text-orange-400 mt-2">Updated price</span>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Update Class"
            />
          </div>
        </div>
      </form>
      <Link to="/dashboard/myClass" className="btn btn-primary mt-[25px]">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default UpdateMyClass;
