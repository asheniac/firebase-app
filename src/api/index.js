import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { usersCollection } from "../utils/firebase";
export const registerUser = async ({ email, password, name, lastname }) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password); //it will create uid automatically
    const { user } = response; //const user= reponse.user;
    const userProfile = {
      uid: user.uid,
      email: email,
      name: name,
      lastname: lastname,
      role: 1,
    };

    await usersCollection.doc(user.uid).set(userProfile);
    firebase.auth().currentUser.sendEmailVerification(null);
    return { isAuth: true, user: userProfile };
  } catch (error) {
    return { error: error.message };
  }
};
