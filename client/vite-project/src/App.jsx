import React from "react";
import { Route, Routes } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./admin/dashboard";
import StudentDashboard from "./student/dashboard";
import LecturerDashboard from "./lecturer/dashboard";
import ParentDashboard from "./parent/dashboard";
import axios from "axios";
import { AuthProvider } from "./component/Auth";
import { RequireAuth } from "./component/RequireAuth";
import './App.css';

axios.defaults.baseURL = "http://localhost:8001";
axios.defaults.withCredentials = true;

const App = () => {
  const queryClient = useQueryClient();
  // const { data: userData } = useQuery("userData", () => queryClient.getQueryData("userData"));

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<RequireAuth><Register /></RequireAuth>} />
          <Route path="/admin/dashboard/*" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
          <Route path="/student/dashboard/*" element={<RequireAuth><StudentDashboard /></RequireAuth>} />
          <Route path="/lecturer/dashboard/*" element={<RequireAuth><LecturerDashboard /></RequireAuth>} />
          <Route path="/parent/dashboard/*" element={<RequireAuth><ParentDashboard /></RequireAuth>} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
