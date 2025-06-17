import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RoundProvider } from "./contexts/roundContext";
import { AuthProvider } from "./contexts/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoundProvider>
          <App />
        </RoundProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
