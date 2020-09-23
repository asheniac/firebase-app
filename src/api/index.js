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
    // console.log(response.user);
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

export const autoSignIn = () =>
  new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersCollection
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            resolve({ isAuth: true, user: snapshot.data() });
            reject((error) => error.message);
          });
      } else {
        resolve({ isAuth: false, user: null });
        reject((error) => error.message);
      }
    });
  });

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const updateProfile = (formData, isEmailChanged) => {
  const collection = usersCollection.doc(formData.uid);

  const updateDocument = () =>
    collection
      .update(formData)
      .then(() =>
        collection
          .get()
          .then((snapshot) => ({ isAuth: true, user: snapshot.data() }))
      );

  if (isEmailChanged) {
    let getUser = firebase.auth().currentUser;
    getUser.updateEmail(formData.email);
    return updateDocument();
  } else {
    return updateDocument();
  }
};
