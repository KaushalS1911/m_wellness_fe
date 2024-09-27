import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1DZnKfn7HqalLAGCH1klhZ6TQATR9Ov8",
  authDomain: "fir-auth-4e6df.firebaseapp.com",
  projectId: "fir-auth-4e6df",
  storageBucket: "fir-auth-4e6df.appspot.com",
  messagingSenderId: "472339931835",
  appId: "1:472339931835:web:cfc512b8501887f566bf9e",
  measurementId: "G-6L31GFR06C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
