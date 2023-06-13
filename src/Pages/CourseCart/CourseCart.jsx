import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import CourseCardTable from "./CourseCardTable";

const CourseCart = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [cart] = useCart();
  console.log(cart);
  return (
    <div className="min-h-screen mt-[45px]">
      <h1 className="text-3xl">Total item added: {cart.length}</h1>
      <div>
        {cart.map((item) => (
          <CourseCardTable key={item._id} item={item}></CourseCardTable>
        ))}
      </div>
    </div>
  );
};

export default CourseCart;
