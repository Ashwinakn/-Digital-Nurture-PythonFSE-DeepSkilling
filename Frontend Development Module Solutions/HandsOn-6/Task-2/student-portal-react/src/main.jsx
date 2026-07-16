import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import { EnrollmentProvider } from "./context/EnrollmentContext";

// Step 76: Wrap <App /> in <BrowserRouter> in main.jsx
// Step 82: Wrap the app in <EnrollmentProvider> in main.jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <EnrollmentProvider>
        <App />
      </EnrollmentProvider>
    </BrowserRouter>
  </React.StrictMode>
);