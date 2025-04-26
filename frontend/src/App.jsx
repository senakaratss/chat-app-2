import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import SignupPage from "./pages/signup/SignupPage.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignupPage />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
