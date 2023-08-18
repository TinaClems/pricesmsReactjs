
import { Route, Routes } from "react-router-dom";
import StudentLayout from "../../component/StudentLayout";
import Attendance from "../studentPage/StAttendance";
import Timetable from "../studentPage/StTimetable";
import Subject from "../studentPage/StSubject";
import Project from "../studentPage/StProject";
import Result from "../studentPage/StResult";
import Report from "../studentPage/StReport";
import StNotice from "../studentPage/StNotice";
import StHome from "./StHome";
import StProfile from "../studentPage/StProfile";
import { useAuth } from "../../component/Auth";



export default function StudentDashboard() {
  // const { user } = useContext(userContext);
  
  return (
    <div>
      <StudentLayout>
      <Routes>
   
        <Route path="/" element={<StHome />} />
        <Route path="/stprofile" element={<StProfile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/result" element={<Result />} />
        <Route path="/report" element={<Report/>} />
        <Route path="/subject" element={<Subject/>} />
        <Route path="/stnotice" element={<StNotice/>} />
        </Routes>

       </StudentLayout>
    </div>
  );
}
