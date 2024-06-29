import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEdtApMjj9fxWMr6LPHYpOVcDSRyQ2XjY",
    authDomain: "farnarent.firebaseapp.com",
    projectId: "farnarent",
    storageBucket: "farnarent.appspot.com",
    messagingSenderId: "572129028924",
    appId: "1:572129028924:web:1f818f1b4cf3d4f6b00c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const hh = getFirestore(app);
export { app };
export { hh };