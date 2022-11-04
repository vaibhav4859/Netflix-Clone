// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyZCC90zptho1CAytp72R50T9NFANDttE",
    authDomain: "netflix-clone-77825.firebaseapp.com",
    projectId: "netflix-clone-77825",
    storageBucket: "netflix-clone-77825.appspot.com",
    messagingSenderId: "429279127046",
    appId: "1:429279127046:web:d6d2f5d3c33c539ce7c587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { auth, db };