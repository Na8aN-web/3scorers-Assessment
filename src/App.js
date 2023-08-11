import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Overview from "./pages/dashboard/Overview";
import Users from "./pages/dashboard/Users"
import Admins from "./pages/dashboard/Admins"
import ProtectedRoute from "../src/components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/overview" element={<ProtectedRoute element={<Overview />} />} />
        <Route path="/dashboard/users" element={<ProtectedRoute element={<Users />} />} />
        <Route path="/dashboard/admins" element={<ProtectedRoute element={<Admins />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
