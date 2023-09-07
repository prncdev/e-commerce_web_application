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
  // We can think this below `doc` function statement as making connection with database and the table which is in this case `users` table and at the same time, we are making request for a particular row record from our `users` table with help of uniqe ID. Now, This `doc` function is acting like a `fopen` function so that we can get its data or we can write or update data in the row record.
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userAuth);

  // Based on the returned `user` document or row, we can access its data or create some data inside this row record, but in this case we are reading the row data.
  const userSnapshort = await getDoc(userDocRef);
  // console.log(userSnapshort);

  // `exists` function will check whether ro not the row is existed inside the `users` table. It will rerturn a boolean value either true or false based on the response.
  // console.log(userSnapshort.exists());

  // Now, Let's validate the row and create one if the row is not exist inside the user table.
  if(!userSnapshort.exists()) {
    const { displayName, email } = userAuth;
    const { creationTime } = userAuth.metadata

    // Let's set / create our user data and store it inside the database.
    try {
      await setDoc(userDocRef, {
        // This is shorthand of ES6 where `variable name` will become `key name` and value become `variable's` value.
        displayName,
        email,
        createdAt: creationTime.slice(0, 16)
      })
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  // If the user exists then we are returning the user reference.
  return userDocRef;
}