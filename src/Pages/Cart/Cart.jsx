// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

// const Cart = () => {
//   const { user } = useContext(AuthContext);
//   const [userCart, setUserCart] = useState([]);
//   useEffect(() => {
//     fetch(`https://summerschoolserver.vercel.app/carts?${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         .log(data);
//         setUserCart(data);
//       });
//   }, []);
//   console.log(userCart);
//   return <div></div>;
// };

// export default Cart;
