// This is our pre-built backend.
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// To make available Oauth option into our application we have to use firebase's auth library.
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// Database connection with firebase.
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';



// Your web app's Firebase configuration
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
  console.log(userDocRef);
}