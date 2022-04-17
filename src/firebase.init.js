// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsxi1LS7aqaRldzqcHlC-R93p29MIAeEM",
  authDomain: "memory-e097f.firebaseapp.com",
  projectId: "memory-e097f",
  storageBucket: "memory-e097f.appspot.com",
  messagingSenderId: "819103239896",
  appId: "1:819103239896:web:f0ae5da33705747e1a51ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;