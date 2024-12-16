import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Optional CSS file
import App from "./App"; // Importing App.js
import reportWebVitals from "./reportWebVitals"; // Optional performance tracking

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // This is where the app is injected into the HTML
);

// For performance tracking (optional)
reportWebVitals();
