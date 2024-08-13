// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import other Firebase services as needed

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuYF2ryG3KKOql5LDv5gocCmeUWUaB4c0",
    authDomain: "playcal-f0d6d.firebaseapp.com",
    projectId: "playcal-f0d6d",
    storageBucket: "playcal-f0d6d.appspot.com",
    messagingSenderId: "1056311101026",
    appId: "1:1056311101026:web:04646d9064081b9b10b33b",
    measurementId: "G-DLMB7R61NT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
// Export the services you need
export { db };