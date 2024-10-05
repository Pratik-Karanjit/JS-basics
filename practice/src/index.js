import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NotificationComponent from "./NotificationComponent.js";
import ServiceWorkerRegistration from "./ServiceWorkerRegistration.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <PaymentComponent /> */}

    {/* <PdfReader /> */}

    <ServiceWorkerRegistration />

    <NotificationComponent />

    {/* <PalindromeChecker></PalindromeChecker> */}
    {/* <ApiUsingAsyncAwait /> */}
    {/* <ApiUsingFetch /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
