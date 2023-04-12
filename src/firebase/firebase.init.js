// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW75MJCFFcdZGyC4Y45qIxrvir9eoYYoo",
  authDomain: "simple-firebase-2aeb2.firebaseapp.com",
  projectId: "simple-firebase-2aeb2",
  storageBucket: "simple-firebase-2aeb2.appspot.com",
  messagingSenderId: "978218459399",
  appId: "1:978218459399:web:b37d1cc118e1cfc68565a2",
  measurementId: "G-X0SETZCQW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;