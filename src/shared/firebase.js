import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDTCY7Rv30bRBBt7dPpe9dL6Pw_ctoxUqU",
  authDomain: "homework-2afd9.firebaseapp.com",
  projectId: "homework-2afd9",
  storageBucket: "homework-2afd9.appspot.com",
  messagingSenderId: "434487965992",
  appId: "1:434487965992:web:e6e866cc9ab5bf3d52781d",
  measurementId: "G-MWBN93T1LT"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export{auth, apiKey};