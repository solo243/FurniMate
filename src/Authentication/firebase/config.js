// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app'

// import { getFirestore } from 'firebase/firestore'
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDEdtApMjj9fxWMr6LPHYpOVcDSRyQ2XjY",
//     authDomain: "farnarent.firebaseapp.com",
//     projectId: "farnarent",
//     storageBucket: "farnarent.appspot.com",
//     messagingSenderId: "572129028924",
//     appId: "1:572129028924:web:1f818f1b4cf3d4f6b00c39"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const hh = getFirestore(app);
// export { app };
// export { hh };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_74xuBvI6y791ynx_y6KuRekrYtcThrE",
    authDomain: "sih2db.firebaseapp.com",
    databaseURL: "https://sih2db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sih2db",
    storageBucket: "sih2db.appspot.com",
    messagingSenderId: "88385875179",
    appId: "1:88385875179:web:6c83b00ac0b915bfc722ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const hh = getFirestore(app);
export const auth = getAuth(app);
export { app };
export { hh };