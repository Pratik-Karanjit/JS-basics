// // CheckoutForm.js
// import React, { useState } from "react";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import axios from "axios";

// // Define the CheckoutForm functional component
// const CheckoutForm = () => {
//   // Get access to the stripe and elements objects
//   const stripe = useStripe(); // Initialize stripe
//   const elements = useElements(); // Initialize elements

//   // State to manage payment success and error messages
//   const [paymentSuccess, setPaymentSuccess] = useState(null);
//   const [paymentError, setPaymentError] = useState(null); // Added state for payment error

//   // Function to handle form submission
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   // Check if Stripe and Elements are available
//   //   if (!stripe || !elements) {
//   //     setPaymentError("Stripe has not loaded properly.");
//   //     return;
//   //   }

//   //   // Get the CardElement instance
//   //   const cardElement = elements.getElement(CardElement);

//   //   if (!cardElement) {
//   //     setPaymentError("Card details are missing.");
//   //     return;
//   //   }

//   //   try {
//   //     // Create the token using the createToken method
//   //     const { token, error } = await stripe.createToken(cardElement);

//   //     if (error) {
//   //       console.error("Stripe createToken error:", error.message);
//   //       setPaymentError(error.message || "An error occurred during payment.");
//   //       setPaymentSuccess(null);
//   //       return;
//   //     }

//   //     if (!token) {
//   //       setPaymentError(
//   //         "Failed to create a token. Please check your card details."
//   //       );
//   //       return;
//   //     }

//   //     console.log("Token created successfully:", token);
//   //     await handlePayment(token.id);
//   //   } catch (error) {
//   //     console.error("Error during token creation:", error);
//   //     setPaymentError(error.message || "An error occurred during payment.");
//   //     setPaymentSuccess(null);
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Check if Stripe and Elements are available
//     if (!stripe || !elements) {
//       setPaymentError("Stripe has not loaded properly.");
//       return;
//     }

//     // Get the CardElement instance
//     const cardElement = elements.getElement(CardElement);

//     if (!cardElement) {
//       setPaymentError("Card details are missing.");
//       return;
//     }

//     // Check if CardElement has any validation errors
//     const cardValidation = cardElement._empty || cardElement._invalid;
//     if (cardValidation) {
//       setPaymentError("Please complete all card details correctly.");
//       return;
//     }

//     try {
//       // Create the token using the createToken method
//       const { token, error } = await stripe.createToken(cardElement);

//       if (error) {
//         console.error("Stripe createToken error:", error.message);
//         setPaymentError(error.message || "An error occurred during payment.");
//         setPaymentSuccess(null);
//         return;
//       }

//       if (!token) {
//         setPaymentError(
//           "Failed to create a token. Please check your card details."
//         );
//         return;
//       }

//       console.log("Token created successfully:", token);
//       await handlePayment(token.id);
//     } catch (error) {
//       console.error("Error during token creation:", error);
//       setPaymentError(error.message || "An error occurred during payment.");
//       setPaymentSuccess(null);
//     }
//   };

//   // Function to handle the payment and get the token.id
//   const handlePayment = async (tokenId) => {
//     try {
//       const response = await axios.post("http://localhost:8000/payment", {
//         token: tokenId,
//       });

//       if (response.data.success) {
//         // Set payment success state if successful
//         setPaymentSuccess("Payment successful!");
//         setPaymentError(null);
//       } else {
//         setPaymentError("Payment failed. Please try again.");
//         setPaymentSuccess(null);
//       }
//     } catch (error) {
//       console.error("Error during payment processing:", error);
//       setPaymentError("An error occurred while processing your payment.");
//       setPaymentSuccess(null);
//     }
//   };

//   // Render the form with CardElement and submit button
//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <CardElement options={styles.cardElement} />
//       <button
//         type="submit"
//         style={
//           stripe
//             ? styles.submitButton
//             : { ...styles.submitButton, ...styles.disabledButton }
//         }
//         disabled={!stripe}
//       >
//         Pay
//       </button>
//       {/* Display payment error or success message if available */}
//       {paymentError && <div style={styles.error}>{paymentError}</div>}
//       {paymentSuccess && <div style={styles.success}>{paymentSuccess}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;

// const styles = {
//   form: {
//     width: "400px",
//     margin: "auto",
//   },
//   cardElement: {
//     fontSize: "16px",
//     color: "#32325d",
//   },
//   submitButton: {
//     marginTop: "16px",
//     padding: "10px 15px",
//     backgroundColor: "#5cb85c",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   disabledButton: {
//     backgroundColor: "#b3b3b3", // Adjust the color for disabled state
//     cursor: "not-allowed",
//   },
//   error: {
//     color: "red",
//     marginTop: "8px",
//   },
//   success: {
//     color: "green",
//     marginTop: "8px",
//   },
// };

// CheckoutForm.js
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [amount, setAmount] = useState(0); // State to manage the payment amount
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setPaymentError("Stripe has not loaded properly.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setPaymentError("Card details are missing.");
      return;
    }

    const cardValidation = cardElement._empty || cardElement._invalid;
    if (cardValidation) {
      setPaymentError("Please complete all card details correctly.");
      return;
    }

    // Ensure the amount is valid and greater than zero
    if (amount <= 0) {
      setPaymentError("Please enter a valid amount.");
      return;
    }

    try {
      const { token, error } = await stripe.createToken(cardElement);
      if (error) {
        console.error("Stripe createToken error:", error.message);
        setPaymentError(error.message || "An error occurred during payment.");
        setPaymentSuccess(null);
        return;
      }

      if (!token) {
        setPaymentError(
          "Failed to create a token. Please check your card details."
        );
        return;
      }

      console.log("Token created successfully:", token);
      await handlePayment(token.id, amount); // Pass the amount to handlePayment
    } catch (error) {
      console.error("Error during token creation:", error);
      setPaymentError(error.message || "An error occurred during payment.");
      setPaymentSuccess(null);
    }
  };

  // Update handlePayment to include amount
  const handlePayment = async (tokenId, amount) => {
    try {
      const response = await axios.post("http://localhost:8000/payment", {
        token: tokenId,
        amount: amount, // Convert amount to cents
      });

      if (response.data.success) {
        setPaymentSuccess("Payment successful!");
        setPaymentError(null);
      } else {
        setPaymentError("Payment failed. Please try again.");
        setPaymentSuccess(null);
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
      setPaymentError("An error occurred while processing your payment.");
      setPaymentSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} // Update amount on change
        style={styles.amountInput}
      />
      <CardElement options={styles.cardElement} />
      <button
        type="submit"
        style={
          stripe
            ? styles.submitButton
            : { ...styles.submitButton, ...styles.disabledButton }
        }
        disabled={!stripe}
      >
        Pay
      </button>
      {paymentError && <div style={styles.error}>{paymentError}</div>}
      {paymentSuccess && <div style={styles.success}>{paymentSuccess}</div>}
    </form>
  );
};

export default CheckoutForm;

const styles = {
  form: {
    width: "400px",
    margin: "auto",
  },
  cardElement: {
    fontSize: "16px",
    color: "#32325d",
  },
  amountInput: {
    marginBottom: "16px",
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButton: {
    marginTop: "16px",
    padding: "10px 15px",
    backgroundColor: "#5cb85c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  disabledButton: {
    backgroundColor: "#b3b3b3",
    cursor: "not-allowed",
  },
  error: {
    color: "red",
    marginTop: "8px",
  },
  success: {
    color: "green",
    marginTop: "8px",
  },
};
