import express, { json } from "express";
import connectDb from "./src/connectdb/connectdb.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import { port } from "./src/config/constant.js";
import cors from "cors";
import userRouter from "./src/router/userRouter.js";
import Stripe from "stripe";

const app = express();

// Use your actual Stripe secret key from the Stripe dashboard
const stripe = new Stripe(
  "sk_test_51Q2pXgFv2ya8A5c9HBBDORDWtKusX0Fc4aQPVXTPt98LTbSLYrTJjgY4iEEvRbksokIvMzb3yUcnn6NYlvwqLaJ900t5hbtkv6"
);

app.use(json());
app.use(cors());
app.use("/users", userRouter);

// app.post("/payment", async (req, res) => {
//   console.log("entered payment API");
//   try {
//     console.log("req bodyyyy", req.body);
//     const { token } = req.body; // Only receiving the token from the request body
//     console.log("token here", token);

//     // Create a payment intent with a return_url
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 1000, // Amount in cents (e.g., 1000 cents = $10.00 USD)
//       currency: "usd",
//       payment_method_data: {
//         type: "card",
//         card: {
//           token: token, // Pass the token within card[token]
//         },
//       },
//       confirm: true, // This confirms the payment automatically upon creation
//       return_url: "https://yourdomain.com/payment-success", // Update with your actual return URL
//     });

//     res.status(200).json({ success: true, paymentIntent });
//   } catch (error) {
//     console.error("Error processing payment:", error);
//     res
//       .status(500)
//       .json({ success: false, error: "Error processing payment." });
//   }
// });

// In your payment endpoint
app.post("/payment", async (req, res) => {
  console.log("entered payment API");
  try {
    console.log("req bodyyyy", req.body);
    const { token, amount } = req.body; // Receive both token and amount
    console.log("token here", token);

    // Create the payment intent with return_url
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_data: {
        type: "card",
        card: {
          token: token,
        },
      },
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never", // Set to 'never' to avoid redirects
      },
      return_url: "http://localhost:3000/success", // Specify your return URL here
    });

    res.status(200).json({ success: true, paymentIntent });
  } catch (error) {
    console.error("Error processing payment:", error);
    res
      .status(500)
      .json({ success: false, error: "Error processing payment." });
  }
});

connectDb();
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
