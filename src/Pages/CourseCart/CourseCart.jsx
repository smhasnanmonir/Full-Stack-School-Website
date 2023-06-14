import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import CourseCardTable from "./CourseCardTable";
import { Link } from "react-router-dom";

const CourseCart = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  return (
    <div className="min-h-screen mt-[45px]">
      <div className="grid place-items-center space-y-3">
        <h1 className="text-3xl">Total course added: {cart.length}</h1>
        <h1 className="text-3xl">Total price: {total} taka</h1>
        <Link className="btn btn-primary text-white" to="payment">
          Proceed to pay
        </Link>
      </div>
      <div className="p-10 bg-slate-100 bg-opacity-70 rounded-xl mt-[25px] border-2 shadow-info-content">
        {cart.map((item) => (
          <CourseCardTable key={item._id} item={item}></CourseCardTable>
        ))}
      </div>
    </div>
  );
};

export default CourseCart;
