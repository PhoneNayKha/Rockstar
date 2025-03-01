import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./About.jsx";

import { BrowserRouter, Routes, Route } from "react-router";

import AppProvider from "./AppProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
