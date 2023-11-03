// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC1EhtRsUU94lkaMMSml8Ie11TYCugZ7T0",
    authDomain: "healthert-web.firebaseapp.com",
    projectId: "healthert-web",
    storageBucket: "healthert-web.appspot.com",
    messagingSenderId: "1058865752969",
    appId: "1:1058865752969:web:20e793f6f8fe243ad54f58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestoreDB = getFirestore(app)
export const realtimeDB = getDatabase(app)