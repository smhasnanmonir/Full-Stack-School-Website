import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import Swal from "sweetalert2";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const [userRole] = useUser();

  //onSummit

  const onSubmit = (data) => {
    const sendData = {
      category: data.category,
      students: data.students,
      price: data.price,
      img: data.img,
      email: data.email,
      instructor: data.name,
      status: "Pending",
      enrolled: 0,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add class!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://school-server-1w5r.onrender.com/classes", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(sendData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire("Class added successfully");
            }
          });
      }
    });
  };
  return (
    <div className="lg:w-[575px] w-[375px] my-[45px] mx-auto">
      <h1 className="mb-[35px] text-3xl text-center">Add a class</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-cyan-200 bg-opacity-30 rounded-xl p-5 "
      >
        <div className="card-body grid grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="category"
              {...register("category", { required: true })}
              placeholder="Enter Class Name"
              className="input input-bordered"
            />
            {errors.category && (
              <span className="text-orange-400 mt-2">Add a class name</span>
            )}
          </div>
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
              <span className="text-orange-400 mt-2">
                Please give seat amount.
              </span>
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
              <span className="text-orange-400 mt-2">
                Please give seat amount.
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="img"
              {...register("img", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.img && (
              <span className="text-orange-400 mt-2">
                Please enter a photo url.
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              name="emil"
              {...register("email", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-orange-400 mt-2">
                Please enter a photo url.
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructors name</span>
            </label>
            <input
              type="text"
              value={userRole[0]?.name}
              name="name"
              {...register("name", { required: true })}
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-orange-400 mt-2">Add a name</span>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Class"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
