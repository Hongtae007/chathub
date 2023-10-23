// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiMgJFpGTyqUA1QoUKl5eBHDe0sFhs1cw",
  authDomain: "chathub-eae22.firebaseapp.com",
  projectId: "chathub-eae22",
  storageBucket: "chathub-eae22.appspot.com",
  messagingSenderId: "1074066579907",
  appId: "1:1074066579907:web:3afc1beb3ffe080c20dd76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);