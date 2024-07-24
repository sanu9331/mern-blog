// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-23fb8.firebaseapp.com",
    projectId: "mern-blog-23fb8",
    storageBucket: "mern-blog-23fb8.appspot.com",
    messagingSenderId: "50070940062",
    appId: "1:50070940062:web:177531a4fd7b7960410e8f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);