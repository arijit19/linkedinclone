import firebase from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
 
firebase.initializeApp(firebaseConfig);
const realtimeDB = firebase.database();
const storage = firebase.storage();
const firestoreDB = firebase.firestore();
const storageRef = storage.ref();


export { realtimeDB, firestoreDB, firebase, storage, storageRef };



 
