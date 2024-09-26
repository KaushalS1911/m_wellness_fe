// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1DZnKfn7HqalLAGCH1klhZ6TQATR9Ov8",
  authDomain: "fir-auth-4e6df.firebaseapp.com",
  projectId: "fir-auth-4e6df",
  storageBucket: "fir-auth-4e6df.appspot.com",
  messagingSenderId: "472339931835",
  appId: "1:472339931835:web:cfc512b8501887f566bf9e",
  measurementId: "G-6L31GFR06C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
