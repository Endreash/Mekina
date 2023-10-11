// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBszeiAHFecjGdSv9eo1uiRtBLRZMWB8aE",
  authDomain: "bettys-place.firebaseapp.com",
  projectId: "bettys-place",
  storageBucket: "bettys-place.appspot.com",
  messagingSenderId: "746790025581",
  appId: "1:746790025581:web:fab7b4d5b44e83572f4264",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
