// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSc_7QWku9ZZ06eQ1CwJ8icVrh6eEdp34",
  authDomain: "netflixgpt-f74a7.firebaseapp.com",
  projectId: "netflixgpt-f74a7",
  storageBucket: "netflixgpt-f74a7.appspot.com",
  messagingSenderId: "484657940664",
  appId: "1:484657940664:web:7c6deebc1016f9800a0c4d",
  measurementId: "G-07JZ34M2NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();