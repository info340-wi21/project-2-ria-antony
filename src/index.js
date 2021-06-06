/* File contains Firebase confirguration
   and renders <App>.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//for firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAtCn64MUrLxkgC9Y_3sXnvr74CnDpb2Y0",
  authDomain: "gamefinder-25b92.firebaseapp.com",
  databaseURL: "https://gamefinder-25b92-default-rtdb.firebaseio.com",
  projectId: "gamefinder-25b92",
  storageBucket: "gamefinder-25b92.appspot.com",
  messagingSenderId: "471793016040",
  appId: "1:471793016040:web:d0a864155dddf0455bbd5d",
  measurementId: "G-5R82NXLP1X"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

