import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBA74e-hYY6noTfScpAZHhGWayYowqQRNc",
  authDomain: "crwn-db-17e08.firebaseapp.com",
  databaseURL: "https://crwn-db-17e08.firebaseio.com",
  projectId: "crwn-db-17e08",
  storageBucket: "crwn-db-17e08.appspot.com",
  messagingSenderId: "747274927558",
  appId: "1:747274927558:web:e7986394662a754c5ec6c7",
  measurementId: "G-E1684EMLWY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
