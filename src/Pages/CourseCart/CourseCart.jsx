import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import CourseCardTable from "./CourseCardTable";

const CourseCart = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  return (
    <div className="min-h-screen mt-[45px]">
      <div className="grid place-items-center space-y-3">
        <h1 className="text-3xl">Total item added: {cart.length}</h1>
        <button className="btn btn-primary text-white  ">Proceed to pay</button>
      </div>
      <div>
        {cart.map((item) => (
          <CourseCardTable key={item._id} item={item}></CourseCardTable>
        ))}
      </div>
    </div>
  );
};

export default CourseCart;
