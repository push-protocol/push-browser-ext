/*global chrome*/

try {
  self.importScripts('firebase-app.js');
  self.importScripts('firebase-messaging.js');

  // Initialize the Firebase app in the service worker by passing the generated config
  var firebaseConfig = {
    apiKey: "AIzaSyBrzkFPyNmVDFzGY7dKz2HocUO4m-ni-Fc",
    authDomain: "epns-ethereum-push-service.firebaseapp.com",
    databaseURL: "https://epns-ethereum-push-service.firebaseio.com",
    projectId: "epns-ethereum-push-service",
    storageBucket: "epns-ethereum-push-service.appspot.com",
    messagingSenderId: "915758146133",
    appId: "1:915758146133:web:2de388356233f5c22f2adc",
    measurementId: "G-X1L5P2E4EP"
  };
  

  firebase.initializeApp(firebaseConfig);

  // Retrieve firebase messaging
  const messaging = firebase.messaging();
  console.log(messaging);
  messaging.onBackgroundMessage(function (payload) {
    console.log('recived mesage');
    console.log(payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
    console.log(notificationTitle);
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
} catch (error) {
  console.error(error);
}
