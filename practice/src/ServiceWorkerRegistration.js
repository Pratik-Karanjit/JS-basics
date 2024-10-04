import React, { useEffect } from "react";

const ServiceWorkerRegistration = () => {
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register(
            "/sw.js",
            {
              scope: "/", // Adjust as necessary
            }
          );
          console.log(
            "Service worker registered with scope:",
            registration.scope
          );
        } catch (error) {
          console.error("Service worker registration failed:", error);
        }
      }
    };

    registerServiceWorker();
  }, []);

  return null; // No UI needed, so return null
};

export default ServiceWorkerRegistration;
