import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCJJpF379AUn4ZA-JiByyVdf-wSEkH-kiw",
  authDomain: "e-commerce-db-aaeac.firebaseapp.com",
  projectId: "e-commerce-db-aaeac",
  storageBucket: "e-commerce-db-aaeac.appspot.com",
  messagingSenderId: "1030737491919",
  appId: "1:1030737491919:web:90fac0ca4a8a1f553884ba"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const singUPWithGooglePopUp = function() {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const getUserDocumentFromAuth = async function(userAuth) {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshort = await getDoc(userDocRef);

  if(!userSnapshort.exists()) {
    const { displayName, email } = userAuth;
    const { creationTime } = userAuth.metadata

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: creationTime.slice(0, 16)
      })
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }
  return userDocRef;
}