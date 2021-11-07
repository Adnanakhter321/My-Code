import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signOut} from "firebase/auth";
import { doc, setDoc ,getFirestore , getDocs ,collection, getDoc,addDoc , onSnapshot ,query ,where,updateDoc } from "firebase/firestore"; 
import { getStorage,ref, uploadBytes, getDownloadURL  } from "firebase/storage";

initializeApp({
  apiKey: "AIzaSyBPzzBEOz9ek3xxSNpJvVLSG_-dNWsvwPg",
  authDomain: "foodappreact-a4c53.firebaseapp.com",
  projectId: "foodappreact-a4c53",
  storageBucket: "foodappreact-a4c53.appspot.com",
  messagingSenderId: "1012321487120",
  appId: "1:1012321487120:web:b4a7ffdb9eb1b308fdbd95",
  measurementId: "G-XE9MVXWNM1"
  });
let storage = getStorage() 
let db = getFirestore();
  
const auth = getAuth();

export {
  getDownloadURL,
  uploadBytes ,
  ref,
   storage,
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
    ,onSnapshot,
    query,where,updateDoc
};