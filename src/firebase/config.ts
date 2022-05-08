import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, updateDoc } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyD_wnxjttGcDJgFq1inck6qaijMGC9yjiA",
    authDomain: "mapelectoral.firebaseapp.com",
    projectId: "mapelectoral",
    storageBucket: "mapelectoral.appspot.com",
    messagingSenderId: "1036201595055",
    appId: "1:1036201595055:web:ad58866461c9856f77c45a",
    measurementId: "G-M1XWB6JE07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app};


