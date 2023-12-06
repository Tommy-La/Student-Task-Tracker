// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAH5XeSi7JW-xskScTQYaV2g3lK6uDOnz8",
    authDomain: "studenttasktracker-57e30.firebaseapp.com",
    projectId: "studenttasktracker-57e30",
    storageBucket: "studenttasktracker-57e30.appspot.com",
    messagingSenderId: "647633796241",
    appId: "1:647633796241:web:0142394d17cb2125081330"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore };
