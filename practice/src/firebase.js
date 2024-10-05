import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOIrLyV5eZy_RezNM_Qlxl7QRZ5KZHIUk",
  authDomain: "fir-notification-ade18.firebaseapp.com",
  projectId: "fir-notification-ade18",
  storageBucket: "fir-notification-ade18.appspot.com",
  messagingSenderId: "189686963903",
  appId: "1:189686963903:web:794b98a6dbb570ed22f00a",
  measurementId: "G-MHBX0TDD37",
};

const app = initializeApp(firebaseConfig);
const messaging = () => getMessaging(app);

// Request Notification Permission
export const requestForNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const currentToken = await getToken(messaging(), {
        vapidKey:
          "BKjTvmjgmTzuGskEPvDCAzARnqQkjkge0cZJU_h-9exMUX8naoy9B8eqwYRxTVr0hErVmnk2F25vUDcJGy27gYA",
      });
      if (currentToken) {
        console.log("FCM token:", currentToken);
        return currentToken;
      } else {
        console.log("No registration token available.");
      }
    } else {
      console.log("Notification permission denied");
    }
  } catch (err) {
    console.error("An error occurred while retrieving token:", err);
  }
};

// Function to handle incoming messages
export const listenForMessages = (onNotificationReceived) => {
  onMessage(messaging(), (payload) => {
    console.log("Message received. ", payload);
    // Call the provided function to handle notification
    onNotificationReceived(payload.notification);
  });
};
