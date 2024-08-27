// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFgorTWvt52QbWbgWKhKnbhhiYGkFBrU8",
  authDomain: "netflixgpt-2476c.firebaseapp.com",
  projectId: "netflixgpt-2476c",
  storageBucket: "netflixgpt-2476c.appspot.com",
  messagingSenderId: "196370691757",
  appId: "1:196370691757:web:6c9858929eec27e9923824",
  measurementId: "G-6GQX5HVT3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();
