import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA_T6UtYC2dSWiZI6mQxOQNgI6juujmbU",
  authDomain: "react-app-993ad.firebaseapp.com",
  projectId: "react-app-993ad",
  storageBucket: "react-app-993ad.appspot.com", // Corrected storageBucket
  messagingSenderId: "894331394332",
  appId: "1:894331394332:web:3ef8a4bcfe713aca5142d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // Firestore for user data
const storage = getStorage(app); // Firebase Storage for profile pictures

export { app, auth, googleProvider, db, storage };
