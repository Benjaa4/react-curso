import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <App />

  </StrictMode>
);
