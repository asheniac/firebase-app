import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  
};

const firebaseApp = firebase.initializeApp(config);

//db
export const db = firebaseApp.firestore();
export const { TimeStamp } = firebase.firestore;
export const usersCollection = db.collection("users");
