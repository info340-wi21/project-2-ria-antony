import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//for firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

