import firebase from "firebase/app";
import firestore from "firebase/firestore";
import auth from "firebase/auth";

const config = {
  apiKey: "AIzaSyAhcoDQTzg35SaGs1JO2UXH75se3bCYCag",
  authDomain: "fir-testing-22cae.firebaseapp.com",
  databaseURL: "https://fir-testing-22cae.firebaseio.com",
  projectId: "fir-testing-22cae",
  storageBucket: "fir-testing-22cae.appspot.com",
  messagingSenderId: "881093215320",
  appId: "1:881093215320:web:0dc506eb755643a34bb62d",
  measurementId: "G-RTNEXGWDG6",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
