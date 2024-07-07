// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mean-estate-b405c.firebaseapp.com",
  projectId: "mean-estate-b405c",
  storageBucket: "mean-estate-b405c.appspot.com",
  messagingSenderId: "475404617724",
  appId: "1:475404617724:web:3d9de3b6fdbe69b063d479"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);