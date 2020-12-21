import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1ko4EaiNwx7DWNdsO-QNy3yS-kaLPBjk",
    authDomain: "twitter-clone-b9ce9.firebaseapp.com",
    projectId: "twitter-clone-b9ce9",
    storageBucket: "twitter-clone-b9ce9.appspot.com",
    messagingSenderId: "282795677072",
    appId: "1:282795677072:web:797233dfcbcbf1a4b90f15",
    measurementId: "G-66BL4HT5Y5"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
