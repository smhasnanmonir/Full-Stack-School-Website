// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

// const Cart = () => {
//   const { user } = useContext(AuthContext);
//   const [userCart, setUserCart] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:5000/carts?${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setUserCart(data);
//       });
//   }, []);
//   console.log(userCart);
//   return <div></div>;
// };

// export default Cart;
