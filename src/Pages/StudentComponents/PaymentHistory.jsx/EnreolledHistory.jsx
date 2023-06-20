import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
import EnrolledList from "./EnrolledList";

const EnrolledHistory = () => {
  const { user } = useContext(AuthContext);
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetch(
      `https://school-server-1w5r.onrender.com/payment/email?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPaymentHistory(data);
      });
  }, []);

  console.log(paymentHistory);

  return (
    <div>
      <h1 className="mb-[15px] text-2xl font-bold">You have enrolled in:</h1>

      {paymentHistory.map((payment) => (
        <EnrolledList key={payment._id} payment={payment}></EnrolledList>
      ))}
    </div>
  );
};

export default EnrolledHistory;
