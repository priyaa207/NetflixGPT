// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOBJHUrsgObmlB0Sr62St8K2AQbYZodSA",
  authDomain: "netflixgpt-856a1.firebaseapp.com",
  projectId: "netflixgpt-856a1",
  storageBucket: "netflixgpt-856a1.firebasestorage.app",
  messagingSenderId: "297215500726",
  appId: "1:297215500726:web:e6de09ce7144f10bfe2117",
  measurementId: "G-PJ2XCV2FD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);