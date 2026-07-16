import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="874319568980-7nuf8aq1mlg4que7smd339lr7omn0i0c.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);