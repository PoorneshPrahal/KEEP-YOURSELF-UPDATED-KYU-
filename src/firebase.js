// Import the functions needed from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-WR3j6My8YIFDkr6zuAiNaNnyZT9wiFk",
  authDomain: "ekyu-708c9.firebaseapp.com",
  projectId: "ekyu-708c9",
  storageBucket: "ekyu-708c9.appspot.com",
  messagingSenderId: "1090294282722",
  appId: "1:1090294282722:web:1a62711b8e3e8a7328a1bb",
  measurementId: "G-NJGBZ0LGPZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore, collection, getDocs };

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
