import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMNnFwqmnOX2Cp-P6ZC3ecSIXNGdc2_B8",
  authDomain: "arifulgfx-ea0bc.firebaseapp.com",
  projectId: "arifulgfx-ea0bc",
  storageBucket: "arifulgfx-ea0bc.appspot.com",
  messagingSenderId: "952987896389",
  appId: "1:952987896389:web:0240ade569e231ef05312c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Enable offline persistence
import { enableIndexedDbPersistence } from "firebase/firestore";
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.log('The current browser does not support persistence.');
  }
}); 