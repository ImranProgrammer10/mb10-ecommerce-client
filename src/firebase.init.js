import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6JRcB6OYVOQCDvdb_av4yQqnka7l232E",
  authDomain: "mb10-ecommerce.firebaseapp.com",
  projectId: "mb10-ecommerce",
  storageBucket: "mb10-ecommerce.appspot.com",
  messagingSenderId: "1024732310347",
  appId: "1:1024732310347:web:3d894ecf34ae4b2313d6ce"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;