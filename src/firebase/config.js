import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0Nx4d5z2QowiFx3tnjfJBSvXX9FcZLEY",
    authDomain: "firegram-ad7d1.firebaseapp.com",
    projectId: "firegram-ad7d1",
    storageBucket: "firegram-ad7d1.appspot.com",
    messagingSenderId: "520860824639",
    appId: "1:520860824639:web:e03beae13a2dcce42bb48a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp }