import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassCard = ({ book }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const { category, students, price, instructor, img, _id } = book;
  // handle cart
  const handleCart = (_id) => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        category,
        img,
        price,
        students,
        instructor,
        email: user.email,
      };
      fetch("https://summerschoolserver.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire("Course Added to Cart");
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={category} />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-bold">{category} Movie Class</h2>
        <p className="text-[18px]">You will learn about {category} movies</p>
        <p className="text-[18px]">Student Enrolled: {students}</p>
        <p className="text-[18px]">Course Instructor: {instructor}</p>
        <p className="text-[18px]">Enrollment Fee: {price}</p>
        <div className="card-actions">
          <button onClick={() => handleCart(_id)} className="btn btn-outline">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
