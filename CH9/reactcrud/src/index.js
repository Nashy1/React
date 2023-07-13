import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyBag4d3DLF9JztZAJhFrY61rmnpTSWODbc",
  authDomain: "crudproject-66d75.firebaseapp.com",
  databaseURL: "https://crudproject-66d75-default-rtdb.firebaseio.com",
  projectId: "crudproject-66d75",
  storageBucket: "crudproject-66d75.appspot.com",
  messagingSenderId: "1008832682215",
  appId: "1:1008832682215:web:bdd9b05b080caac9f7aa42",
  measurementId: "G-9BSKL0J2W6"
};
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
