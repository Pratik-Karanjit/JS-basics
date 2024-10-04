import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestForNotificationPermission } from "./firebase.js";

const NotificationComponent = () => {
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationBody, setNotificationBody] = useState("");
  const [fcmToken, setFcmToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const token = await requestForNotificationPermission();
      setFcmToken(token);
    };
    fetchToken();
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
    </div>
  );
};

export default NotificationComponent;
