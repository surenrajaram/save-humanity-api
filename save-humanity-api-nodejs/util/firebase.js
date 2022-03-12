const firebase = require('firebase');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCznSmSb2pn5ABPhgO0tJ-gDoPTLXcHncs",
  authDomain: "save-humanity-api.firebaseapp.com",
  projectId: "save-humanity-api",
  storageBucket: "save-humanity-api.appspot.com",
  messagingSenderId: "801528678996",
  appId: "1:801528678996:web:74e5e18e258b603e883bc1",
  measurementId: "G-1DS4JHL56T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
module.exports = {firebase};
