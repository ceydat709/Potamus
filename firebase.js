// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: 'AIzaSyB6BLfpglW8j6nKUFjnyqNVapGh-4GM9Fs',

  authDomain: process.env.AUTH_DOMAIN ,

  projectId: process.env.PROJECT_ID ,

  storageBucket: process.env.STORAGE_BUCKET ,

  messagingSenderId: process.env.MESSAGING_SENDER_ID ,

  appId: process.env.APP_ID

};




// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();
//Google auth provider setup
const provider = new GoogleAuthProvider();


// Password less sign-in url setup
export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https//:tailred-ebee1.firebaseapp.com',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'https//:tailred-ebee1.firebaseapp.com'
};
  

//Google function for auth
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error);
    });
}

export {app, db, storage, auth}