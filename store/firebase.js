// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCxVdg8RTFLk_V-4z0fIaE2oW9uD-bRD2Y",
  authDomain: "rnohapp.firebaseapp.com",
  projectId: "rnohapp",
  storageBucket: "rnohapp.appspot.com",
  messagingSenderId: "975334053703",
  appId: "1:975334053703:web:fc40e2a622c16443b69e62",
  measurementId: "G-EVXMMDSE69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);  // Initialize Firestore
