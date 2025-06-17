import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import RulesPage from "./pages/RulesPage";

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ default: { duration: 1500 } }} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/rules" element={<RulesPage/>} />
      </Routes>
    </>
  );
}

export default App;
