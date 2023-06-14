import Swal from "sweetalert2";
import useAllUser from "../../hooks/useAllUser";

const ManageUserCard = ({ user }) => {
  const { img, role, name, email, _id } = user;
  //handle make admin
  const [, refetch] = useAllUser();
  const handleMakeAdmin = (id) => {
    const sendData = {
      role: "admin",
    };
    Swal.fire({
      title: "Do You Want to make this user an Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allUsers/${id}`, {
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
              Swal.fire("This user is now an admin.");
            }
          });
      }
    });
  };
  //handle make Instructor
  const handleMakeInstructor = (id) => {
    const sendData = {
      role: "instructor",
    };
    Swal.fire({
      title: "Do You Want to make this user an Instructor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allUsers/${id}`, {
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
              Swal.fire("This user is now an Instructor.");
            }
          });
      }
    });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-[65px]">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Role: {role}</p>
        <div className="flex gap-1">
          <button
            onClick={() => handleMakeAdmin(_id)}
            className="btn btn-primary"
          >
            Make Admin
          </button>
          <button
            onClick={() => handleMakeInstructor(_id)}
            className="btn btn-primary"
          >
            Make Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageUserCard;
