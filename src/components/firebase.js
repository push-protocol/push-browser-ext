/*global chrome*/
import firebase from 'firebase/app'

import * as dotenv from "dotenv";
import 'firebase/messaging'
dotenv.config();

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


firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

export const getToken = () => {
  return messaging
    .getToken({
      vapidKey:
      //epns
      "BOMOB--KihZkwM8SQ_OrPEsuu8UcSYiRB9AvMjsWil3WJDmxBEcDex8g4d5rFGgA8U-7esfRM5pvR98jaE1nX0M",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken)
        return currentToken
      } else {
        console.log(
          'No registration token available. Request permission to generate one.',
        )
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err)
      // catch error while creating client token
    })
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload)
    })
  })
