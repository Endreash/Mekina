// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket:  STORAGEBUCKET,
  messagingSenderId:MESSAGINGSENDERID,
  appId: APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
