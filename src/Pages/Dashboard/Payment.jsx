import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../hooks/useCart";
import { loadStripe } from "@stripe/stripe-js";
const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51NGwcgK1rPsA3dPJQ1o87wggAKKJict35XO5VfLb45pvvhnxZAYSnZJtPPRvjJtTwy1HfeKDDZzbUu6hDHrlsGkG00jurTdBwq"
  );
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="min-h-screen lg:w-[750px]">
      <h2 className="text-3xl ml-[25px] font-black mt-[65px]">
        Give your card information.
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
