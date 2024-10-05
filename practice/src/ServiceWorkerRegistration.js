import React, { useEffect } from "react";

const ServiceWorkerRegistration = () => {
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js", // Use the correct filename
            {
              type: "module", // Specify type as module for ES modules
              scope: "/firebase-cloud-messaging-push-scope/",
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
