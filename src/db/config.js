import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCA7XRXj2RgFvNV3Htbu2quUupvhlJGj10",
    authDomain: "food-project-2ff55.firebaseapp.com",
    databaseURL: "https://food-project-2ff55-default-rtdb.firebaseio.com",
    projectId: "food-project-2ff55",
    storageBucket: "food-project-2ff55.appspot.com",
    messagingSenderId: "693711670406",
    appId: "1:693711670406:web:712165d904dc0b98c81507",
    measurementId: "G-RQ7G6ZBVJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

export {auth , providerGoogle , providerFacebook , signInWithEmailAndPassword ,createUserWithEmailAndPassword };
