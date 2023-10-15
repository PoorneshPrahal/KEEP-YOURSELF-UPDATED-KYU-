// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGphVPbfUT2vrN15FsMohzA_FIRs2OzdU",
  authDomain: "comments-d9ab8.firebaseapp.com",
  projectId: "comments-d9ab8",
  storageBucket: "comments-d9ab8.appspot.com",
  messagingSenderId: "471456430082",
  appId: "1:471456430082:web:575f4c29c1eab30a348f1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =  getFirestore(app);