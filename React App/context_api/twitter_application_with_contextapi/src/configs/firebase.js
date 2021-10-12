import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signOut} from "firebase/auth";
import { doc, setDoc ,getFirestore , getDocs ,collection, getDoc,addDoc , onSnapshot} from "firebase/firestore"; 

initializeApp({
    apiKey: "AIzaSyBRs6pgp8KPqK8iZyvSTvfuvs_-QVQI0Xk",
    authDomain: "mydeliveryappadnan.firebaseapp.com",
    projectId: "mydeliveryappadnan",
    storageBucket: "mydeliveryappadnan.appspot.com",
    messagingSenderId: "351825615537",
    appId: "1:351825615537:web:888ff432ac6f4e64cfe090"
  });

let db = getFirestore();
  
const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    doc,
    setDoc,
    getFirestore,
    collection,
    getDocs,
    db,
    getDoc,addDoc
    ,onSnapshot
};