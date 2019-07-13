import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBz53-dUiUbWYFzl0Sv8BElD046y78MFJo",
  authDomain: "strore-db.firebaseapp.com",
  databaseURL: "https://strore-db.firebaseio.com",
  projectId: "strore-db",
  storageBucket: "",
  messagingSenderId: "215141141383",
  appId: "1:215141141383:web:53894eb08d719ef2"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;