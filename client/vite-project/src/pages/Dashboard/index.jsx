
import { Route, Routes } from "react-router-dom";
import "../../App.css";
import DashboardLayout from "../../component/Layout";
import Profile from "../profile";
import Projects from "../projects";
import Students from "../students";
import Academics from "../Academics";
import Lecturers from "../Lecturers";
import Faculty from "../Faculty";
import Subject from "../Subject";
import Settings from "../Settings";
import Notice from "../Notice";
import Home from "./Home";

export default function Dashboard() {
  // const { user } = useContext(userContext);
  return (
    <div>
      <DashboardLayout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/students" element={<Students />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/lecturers" element={<Lecturers />} />
        <Route path="/faculty" element={<Faculty/>} />
        <Route path="/subject" element={<Subject/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/notice" element={<Notice/>} />
        </Routes>
       </DashboardLayout>
    </div>
  );
}
