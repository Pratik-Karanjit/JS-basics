importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAOIrLyV5eZy_RezNM_Qlxl7QRZ5KZHIUk",
  authDomain: "fir-notification-ade18.firebaseapp.com",
  projectId: "fir-notification-ade18",
  storageBucket: "fir-notification-ade18.appspot.com",
  messagingSenderId: "189686963903",
  appId: "1:189686963903:web:794b98a6dbb570ed22f00a",
  measurementId: "G-MHBX0TDD37",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
