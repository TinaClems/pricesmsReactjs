
import { Route, Routes } from "react-router-dom";
// import "../../App.css";
import AdminLayout from "../../component/adminLayout";
import AdProfile from "./adminPage/adProfile";
import AdHome from "./adHome";
import AdProject from "./adminPage/AdProject";
import AdStudent from "./adminPage/AdStudent";
import AdAcademics from "./adminPage/AdAcademics";
import AdLecturer from "./adminPage/AdLecturer";
import AdFaculty from "./adminPage/AdFaculty";
import AdSubject from "./adminPage/AdSubject";
import AdSettings from "./adminPage/AdSettings";
import AdNotice from "./adminPage/AdNotice";


export default function AdminDashboard() {
  // const { user } = useContext(userContext);
  return (
    <div>
      <AdminLayout>
      <Routes>
        <Route path="/" element={<AdHome/>} />
        <Route path="/adprofile" element={<AdProfile />} />
        <Route path="/adproject" element={<AdProject />} />
        <Route path="/adstudent" element={<AdStudent />} />
        <Route path="/adacademics" element={<AdAcademics />} />
        <Route path="/adlecturer" element={<AdLecturer />} />
        <Route path="/adfaculty" element={<AdFaculty/>} />
        <Route path="/adsubject" element={<AdSubject/>} />
        <Route path="/adsettings" element={<AdSettings/>} />
        <Route path="/adnotice" element={<AdNotice/>} />
        </Routes>
       </AdminLayout>
    </div>
  );
}
