import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";
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
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
const firesoreDB = getFirestore(app);

export const createUserFromGoogleAuth = async (userAuth) => {
  const userRef = doc(firesoreDB, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().getTime();

    try {
      await setDoc(userRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Failed to create a user", error);
    }
  }

  return userRef;
};
