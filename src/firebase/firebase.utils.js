import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4nhYWdtfXs_aZ7BNX3nP3Pj152VWMYuE",
  authDomain: "crwn-db-7129f.firebaseapp.com",
  databaseURL: "https://crwn-db-7129f.firebaseio.com",
  projectId: "crwn-db-7129f",
  storageBucket: "crwn-db-7129f.appspot.com",
  messagingSenderId: "419271632239",
  appId: "1:419271632239:web:db4f48252aec362bb0749a",
  measurementId: "G-N25QEMP269"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;