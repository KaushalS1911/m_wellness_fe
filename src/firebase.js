import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBm6GmkZZNTgIhvsNFwQyj9qW-4WvhsJRw",
    authDomain: "mwellness-79713.firebaseapp.com",
    projectId: "mwellness-79713",
    storageBucket: "mwellness-79713.appspot.com",
    messagingSenderId: "917093503820",
    appId: "1:917093503820:web:9bd59587c561621b2ab5e9",
    measurementId: "G-8FQBB1L3WJ"
};

firebase.initializeApp(firebaseConfig);
export default firebase;