/*global chrome*/
import firebase from 'firebase/app';
import 'firebase/messaging';

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
const messaging = firebase.messaging();

export const getToken = () => {
  return new Promise(async (resolve, reject) => {
    const numOfAttempts = 3;
    let tries = 1;
    let attempting = true;
    console.log('inside fun');
    while (attempting) {
      console.log(attempting);
      console.log(tries);
      try {
        console.log('try');
        console.log(messaging);
        const currentToken = await messaging.getToken({
          vapidKey:
            'BOMOB--KihZkwM8SQ_OrPEsuu8UcSYiRB9AvMjsWil3WJDmxBEcDex8g4d5rFGgA8U-7esfRM5pvR98jaE1nX0M',
          });
        console.log(currentToken);

        if (currentToken) {
          resolve(currentToken);
          attempting = false;
        } else {
          console.error(
            'No registration token available. Request permission to generate one.'
          );
          reject(true);
          attempting = false;
        }
      } catch (err) {
        if (tries > numOfAttempts) {
          attempting = false;
          console.error('FCM | Request retries failed, Error: ', err);
        } else {
          console.log(
            'FCM | Request Failed... Retrying: ' + tries + ' / ' + numOfAttempts
          );
        }
      }

      tries = tries + 1;
    }
  });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
