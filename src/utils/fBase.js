import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
    apiKey: "AIzaSyAX21k1oCahCYl83v-Mf6rqnS39pQCj5As",
    authDomain: "xnbeats-361a9.firebaseapp.com",
    databaseURL: "https://xnbeats-361a9.firebaseio.com",
    projectId: "xnbeats-361a9",
    storageBucket: "xnbeats-361a9.appspot.com",
    messagingSenderId: "447122881394",
    appId: "1:447122881394:web:d671ab422736e30d997beb",
    measurementId: "G-CN4KSQHKC2"
}

const fBaseApp = firebase.initializeApp(config);

// DB
export const DB = fBaseApp.firestore();
export const { Timestamp } = firebase.firestore;
export const usersCollection = DB.collection('users');
export const reviewsCollection = DB.collection('reviews');
export const messagesCollection = DB.collection('messages');
