import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  requestForNotificationPermission,
  listenForMessages,
} from "./firebase.js";

const NotificationComponent = () => {
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationBody, setNotificationBody] = useState("");
  const [fcmToken, setFcmToken] = useState("");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await requestForNotificationPermission();
      setFcmToken(token);
      console.log("token************", token);
    };

    fetchToken();

    // Listen for incoming messages
    listenForMessages((notification) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notification,
      ]);
    });
  }, []);

  const sendNotification = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/send-notification",
        {
          token: fcmToken,
          notificationTitle: notificationTitle,
          notificationBody: notificationBody,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <div>
      <h2>Send Firebase Notification</h2>
      <input
        type="text"
        placeholder="Notification Title"
        value={notificationTitle}
        onChange={(e) => setNotificationTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Notification Body"
        value={notificationBody}
        onChange={(e) => setNotificationBody(e.target.value)}
      />
      <button onClick={sendNotification}>Send Notification</button>

      {/* Display received notifications */}
      <div>
        <h3>Received Notifications:</h3>
        {notifications.map((notification, index) => (
          <div key={index}>
            <strong>{notification?.title}</strong>: {notification?.body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationComponent;
