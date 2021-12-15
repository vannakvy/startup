
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAhYhSh9VdVrNTLYUdiLoTJmKJ2-ZH1N4U",
  authDomain: "crud-fe4b6.firebaseapp.com",
  databaseURL: "https://crud-fe4b6.firebaseio.com",
  projectId: "crud-fe4b6",
  storageBucket: "crud-fe4b6.appspot.com",
  messagingSenderId: "119580648901",
  appId: "1:119580648901:web:49cc35e17949803d0017ac",
  measurementId: "G-LQGTBYH69B"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore();
export const storage = getStorage(firebase);
