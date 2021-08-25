import firebase from "firebase"

const config = {
    apiKey: "AIzaSyBPxSCndN2yG6AH6mHvIWF0L8KQUV3IY5g",
    authDomain: "medicodgns.firebaseapp.com",
    databaseURL: "https://medicodgns-default-rtdb.firebaseio.com",
    projectId: "medicodgns",
    storageBucket: "medicodgns.appspot.com",
    messagingSenderId: "454010421868",
    appId: "1:454010421868:web:0b61f4232eb6b5b749ce49",
    measurementId: "G-2B8D16PC3G"
  };

export const firebaseConfig = firebase.initializeApp(config)
