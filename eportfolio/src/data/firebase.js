import firebase from "firebase";
firebase.initializeApp({
  apiKey: "AIzaSyB6-XzH_OqNcW5RMiD4iiZqSyQev22HIyw",
  authDomain: "eportfolio-5head.firebaseapp.com",
  databaseURL: "https://eportfolio-5head.firebaseio.com",
  projectId: "eportfolio-5head",
  storageBucket: "eportfolio-5head.appspot.com",
  messagingSenderId: "1092112688172",
  appId: "1:1092112688172:web:07921eaf8d11dff13edd89",
});

// make sure we use the emulator db if on localhost
export const db = firebase.firestore();
export const rdb = firebase.database();
export const auth = firebase.auth;
export const storage = firebase.storage();
// if (window.location.hostname === "localhost") {
//   db.settings({
//     host: "localhost:8080",
//     ssl: false,
//   });
// }
