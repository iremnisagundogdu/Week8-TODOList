// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKDcGeAMSqSO4OD6Fbj9gJeAuTgYAm5So",
  authDomain: "todo-app-3b080.firebaseapp.com",
  projectId: "todo-app-3b080",
  storageBucket: "todo-app-3b080.appspot.com",
  messagingSenderId: "484557166066",
  appId: "1:484557166066:web:813c750fdb507ae515076b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)