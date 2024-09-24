// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-58bb4.firebaseapp.com",
  projectId: "auth-58bb4",
  storageBucket: "auth-58bb4.appspot.com",
  messagingSenderId: "836215523590",
  appId: "1:836215523590:web:6749087de95f830351f687",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);