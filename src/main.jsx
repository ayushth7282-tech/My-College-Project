import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="603072432342-088upb32g0fdkekk5nh8k4tjv98necf7.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);