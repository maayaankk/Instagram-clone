import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDA1hcbBANyJHRv1THvzr8BC26B6Zly_Qo",
    authDomain: "instagram-clone-410e7.firebaseapp.com",
    databaseURL: "https://instagram-clone-410e7.firebaseio.com",
    projectId: "instagram-clone-410e7",
    storageBucket: "instagram-clone-410e7.appspot.com",
    messagingSenderId: "837900877002",
    appId: "1:837900877002:web:531130e38845da7d0f0833",
    measurementId: "G-D7EF0YLLMF"
});



const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

