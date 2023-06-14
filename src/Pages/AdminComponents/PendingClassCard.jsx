import Swal from "sweetalert2";
import useManageClass from "../../hooks/useManageClass";
import { Link } from "react-router-dom";

const PendingClassCard = ({ pendingClass }) => {
  const {
    img,
    status,
    students,
    category,
    instructor,
    enrolled,
    _id,
    feedback,
  } = pendingClass;
  const [, refetch] = useManageClass();
  const handleApprove = (id) => {
    const sendData = {
      status: "Approved",
    };
    Swal.fire({
      title: "Do You Really Want to Approve it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/${id}`, {
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
              Swal.fire("Approved");
            }
          });
      }
    });
  };

  //send deny
  const handleDeny = (id) => {
    const sendData = {
      status: "Deny",
    };
    Swal.fire({
      title: "Do You Really Want to Deny it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/${id}`, {
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
              Swal.fire("Approved");
            }
          });
      }
    });
  };

  // send feedback
  const handleFeedback = (id) => {
    console.log(id);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={category} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p className="text-[16px] font-bold">Available seats: {students}</p>
        <p className="text-[16px] font-bold">Booked Seats: {enrolled}</p>
        <p className="text-[16px] font-bold">Instructor Name: {instructor}</p>
        <p className="text-[16px] font-bold">Status: {status}</p>
        <div className="flex gap-3">
          <button
            onClick={() => handleApprove(_id)}
            className="btn btn-success"
          >
            Approve
          </button>
          <button onClick={() => handleDeny(_id)} className="btn btn-warning">
            Deny
          </button>
          <Link
            onClick={() => handleFeedback(_id)}
            className="btn btn-error"
            to={`feedbackClass/${_id}`}
          >
            Feed Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PendingClassCard;
