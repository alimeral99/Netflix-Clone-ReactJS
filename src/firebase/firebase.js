// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF_lgRFSYGfKNjRAD3o6iimJcG0wDMJqE",
  authDomain: "netflix-clone-91abd.firebaseapp.com",
  projectId: "netflix-clone-91abd",
  storageBucket: "netflix-clone-91abd.appspot.com",
  messagingSenderId: "283609145916",
  appId: "1:283609145916:web:ab90d2b9b2e39a2df01939",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
