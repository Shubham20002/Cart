// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyY3OxzQ7MhIjd3Bywyiwdx1f26OXQpyk",
  authDomain: "cart-4bc51.firebaseapp.com",
  projectId: "cart-4bc51",
  storageBucket: "cart-4bc51.appspot.com",
  messagingSenderId: "928623896276",
  appId: "1:928623896276:web:e9fe70095d5ba8b52fbd41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
