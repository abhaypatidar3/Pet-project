// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   // This will reference the index.css file
import App from './App'; // This will reference the App.js file
import reportWebVitals from './reportWebVitals'; // Optional

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional for measuring performance
reportWebVitals();
