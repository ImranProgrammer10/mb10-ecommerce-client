import { getAuth, onAuthStateChanged } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from 'react';
 
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtQmdDgUVwOnGn-7K7obsVknz57Sj9U64",
  authDomain: "manufacturer-13f40.firebaseapp.com",
  projectId: "manufacturer-13f40",
  storageBucket: "manufacturer-13f40.appspot.com",
  messagingSenderId: "820539459142",
  appId: "1:820539459142:web:f926c99656ce6b9fe32c47"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;