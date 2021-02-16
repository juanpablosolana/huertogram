import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZ0lTxtN8wUJIhSQvBRL8xT-hWPW0lTyA",
  authDomain: "huerto-fee51.firebaseapp.com",
  databaseURL: "https://huerto-fee51.firebaseio.com",
  projectId: "huerto-fee51",
  storageBucket: "huerto-fee51.appspot.com",
  messagingSenderId: "564399783086",
  appId: "1:564399783086:web:ae71b8713f73e7b52a413f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export {projectStorage, projectFirestore,timestamp,projectAuth};