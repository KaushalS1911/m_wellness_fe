// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyBm6GmkZZNTgIhvsNFwQyj9qW-4WvhsJRw",
  // authDomain: "mwellness-79713.firebaseapp.com",
  // projectId: "mwellness-79713",
  // storageBucket: "mwellness-79713.appspot.com",
  // messagingSenderId: "917093503820",
  // appId: "1:917093503820:web:9bd59587c561621b2ab5e9",
  apiKey: "AIzaSyDcp0xj2NECd2xa9yniMRcvJ88s0hUkWcg",
  authDomain: "whatsapp-clone-5f08c.firebaseapp.com",
  projectId: "whatsapp-clone-5f08c",
  storageBucket: "whatsapp-clone-5f08c.appspot.com",
  messagingSenderId: "738057985991",
  appId: "1:738057985991:web:f902d856cf95dbdada83e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
