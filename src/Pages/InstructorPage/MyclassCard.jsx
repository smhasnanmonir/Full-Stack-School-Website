import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useInstructors from "../../hooks/useInstructors";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const MyclassCard = ({ teacher }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useInstructors();
  const { category, students, img, price, status, _id, enrolled } = teacher;
  const handleClassDelete = (id) => {
    Swal.fire({
      title: "Are Want to remove this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const userID = { id };
        fetch(`http://localhost:5000/classes/email${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userID),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data.deletedCount);
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    <div className="card w-96 bg-base-100 shadow-xl space-y-3 mb-[65px]">
      <figure>
        <img className="h-[350px] w-fit" src={img} alt={category} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p>Price:{price}</p>
        <p>Total Seats:{students}</p>
        <p>Enrolled Student:{enrolled}</p>
        {/* <p>Status: {teacher?.status}</p> */}
        {status === "Pending" ? (
          <p className="text-red-500">Status: Pending</p>
        ) : (
          <p className="text-green-500">Status: Approved</p>
        )}
        <div className="flex gap-3 w-full">
          <button
            onClick={() => handleClassDelete(_id)}
            className="btn btn-error w-1/2"
          >
            Delete
          </button>
          <label htmlFor="my_modal_6" className="btn">
            Update
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <div className="">
                <h1 className="mb-[35px] text-3xl text-center">
                  Update the class
                </h1>
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
                        <span className="text-orange-400 mt-2">
                          Updated seat amount
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
                          Updated price
                        </span>
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
              </div>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyclassCard;
