import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const CourseCardTable = ({ item }) => {
  const { category, price, img, _id } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();

  const handleDeleteCart = (id) => {
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
        fetch(`https://school-server-1w5r.onrender.com/carts/${id}`, {
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
    <div className="">
      <div className="flex gap-3 align-middle items-center mb-3 p-5 bg-red-300 rounded-md justify-center mt-[15px]">
        <img className="w-[75px] rounded-lg" src={img} />
        <p className="text-xl">{category} film course</p>
        <p className="text-xl">${price}</p>
        <button
          onClick={() => handleDeleteCart(_id)}
          className="btn btn-outline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CourseCardTable;
