import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeKsx2kQi-deNBXl8Re7R2zLFbRp7TewM",
  authDomain: "crwn-f153e.firebaseapp.com",
  projectId: "crwn-f153e",
  storageBucket: "crwn-f153e.appspot.com",
  messagingSenderId: "412967636135",
  appId: "1:412967636135:web:8e50ed3e608cab3bb79f82",
  measurementId: "G-0PDBP94RSC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
