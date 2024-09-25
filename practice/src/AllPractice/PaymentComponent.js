import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm.js";

const stripePromise = loadStripe(
  "pk_test_51Q2pXgFv2ya8A5c9r3cjb1Td2TXI5U1y0mYn5oF5fLNLG3b1rIsRTM0vs0sup8OevHqdiFiS1GB5ewcw3U7UIyZV00MGD3SiOj"
);
const PaymentComponent = () => {
  return (
    <div>
      <h1>Stripe Payment Example</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PaymentComponent;
