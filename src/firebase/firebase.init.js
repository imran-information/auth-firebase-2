// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgJzYhYPDIzRZOMk4a5cMjjaY4b-Nrztk",
    authDomain: "auth-firebase-2-d475c.firebaseapp.com",
    projectId: "auth-firebase-2-d475c",
    storageBucket: "auth-firebase-2-d475c.firebasestorage.app",
    messagingSenderId: "1009459055480",
    appId: "1:1009459055480:web:aad441dd4e11c4789a168d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);