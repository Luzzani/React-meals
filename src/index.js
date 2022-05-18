import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuKzXRZPQMcuCtzU0vBJ3uhl0F8WaFfuU",
  authDomain: "e-commercecoderhouse-e4601.firebaseapp.com",
  projectId: "e-commercecoderhouse-e4601",
  storageBucket: "e-commercecoderhouse-e4601.appspot.com",
  messagingSenderId: "612780834930",
  appId: "1:612780834930:web:6f1ec7f0a1d940feaa42eb"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
