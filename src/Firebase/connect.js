// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHo-B1dKmHqYeNm99aVB9-1JG51IidelQ",
  authDomain: "portfolio-f649e.firebaseapp.com",
  projectId: "portfolio-f649e",
  storageBucket: "portfolio-f649e.firebasestorage.app",
  messagingSenderId: "920573120548",
  appId: "1:920573120548:web:314d37ca53110482d188b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
