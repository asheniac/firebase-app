import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { usersCollection } from "../utils/fBase";

export const registerUsers = async ({ email, name, lastname, password }) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const { user } = response;
    console.log(response.user);
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

export const loginUser = ({ email, password }) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      const { user } = response;
      return usersCollection
        .doc(user.uid)
        .get()
        .then((snapshot) => {
          return { isAuth: true, user: snapshot.data() };
        });
    })
    .catch((error) => ({ error: error.message }));

export const autoSignIn = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      usersCollection
        .doc(user.uid)
        .get()
        .then((snapshot) => {
          //console.log(snapshot.data());
          return { isAuth: true, user: snapshot.data() };
        })
        .catch((error) => error.message);
    } else {
      return { isAuth: false, user: null };
    }
  });
};

export const logoutUser = () => {
  firebase.auth().signOut();
};
