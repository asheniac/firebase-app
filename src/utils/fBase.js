import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
    
}

const fBaseApp = firebase.initializeApp(config);

// DB
export const DB = fBaseApp.firestore();
export const { Timestamp } = firebase.firestore;
export const usersCollection = DB.collection('users');
export const reviewsCollection = DB.collection('reviews');
export const messagesCollection = DB.collection('messages');
