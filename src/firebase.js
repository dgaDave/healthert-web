// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCM8dFfWTqqiZ7BAI9VnU-RBZ3mC15a-z4",
    authDomain: "healthert-b89e0.firebaseapp.com",
    databaseURL: "https://healthert-b89e0-default-rtdb.firebaseio.com",
    projectId: "healthert-b89e0",
    storageBucket: "healthert-b89e0.appspot.com",
    messagingSenderId: "191565912077",
    appId: "1:191565912077:web:5bca1c3d75069eb2239d44",
    measurementId: "G-BXJ63W1VPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)