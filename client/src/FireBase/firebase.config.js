// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbfqMD4oH90iJulRs2TVo68iFuYrjI4hw",
  authDomain: "mern-book-inventory-a5531.firebaseapp.com",
  projectId: "mern-book-inventory-a5531",
  storageBucket: "mern-book-inventory-a5531.appspot.com",
  messagingSenderId: "259347107746",
  appId: "1:259347107746:web:69a46e43e31f057131ecfb",
  measurementId: "G-277448MQ39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;