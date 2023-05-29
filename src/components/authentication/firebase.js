// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB90HRGgG-IyAQ7lF07ptIsn80ghKI09Kc",
  authDomain: "myntra-auth-97812.firebaseapp.com",
  projectId: "myntra-auth-97812",
  storageBucket: "myntra-auth-97812.appspot.com",
  messagingSenderId: "757044203050",
  appId: "1:757044203050:web:ca89b55b2e5a99beb17d53",
  measurementId: "G-XLN03N0FY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};
