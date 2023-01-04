// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkoEd9KYrvNNRR_TtRMXXLTAyegfMvGoc",
  authDomain: "playergo-63a47.firebaseapp.com",
  projectId: "playergo-63a47",
  storageBucket: "playergo-63a47.appspot.com",
  messagingSenderId: "963499395344",
  appId: "1:963499395344:web:fcf3f2ec3c7027e95bbd95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
