
import { Route, Routes } from "react-router-dom";
import LecturerLayout from "../../component/lecturerLayout";
import LtProfile from "../lecturerPage/LtProfile";
import LtStudent from "../lecturerPage/LtStudent";
import LtAttendance from "../lecturerPage/LtAttendance";
import LtResult from "../lecturerPage/LtResult";
import LtSubject from "../lecturerPage/LtSubject";
import LtNotice from "../lecturerPage/LtNotice";
import LtReport from "../lecturerPage/LtReport";



// import Profil

export default function LecturerDashboard() {
  // const { user } = useContext(userContext);
  return (
    <div>
      <LecturerLayout>
      <Routes>
        <Route path="/Ltprofile" element={<LtProfile />} />
        <Route path="/Ltstudent" element={<LtStudent />} />
        <Route path="/Ltattendance" element={<LtAttendance />} />
        <Route path="/Ltresult" element={<LtResult/>} />
        <Route path="/Ltsubject" element={<LtSubject/>} />
        <Route path="/LtNotice" element={<LtNotice/>} />
        <Route path="/Ltreport" element={<LtReport/>} />

t        </Routes>
       </LecturerLayout>
    </div>
  );
}


