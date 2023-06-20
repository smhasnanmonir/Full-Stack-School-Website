import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useInstructors from "../../hooks/useInstructors";
import { Link } from "react-router-dom";

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
        fetch(`https://school-server-1w5r.onrender.com/classes/email${_id}`, {
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
          <Link className="btn btn-warning w-1/2" to={`updateClass/${_id}`}>
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyclassCard;
