import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBgMqraLzEqoglPxNKIqJF5tCk_qwbxGQw",
  authDomain: "flash-your-card.firebaseapp.com",
  databaseURL: "https://flash-your-card.firebaseio.com",
  projectId: "flash-your-card",
  storageBucket: "flash-your-card.appspot.com",
  messagingSenderId: "89587570682",
  appId: "1:89587570682:web:788d4359c90132516d3643",
  measurementId: "G-EVSGS6S4RD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
