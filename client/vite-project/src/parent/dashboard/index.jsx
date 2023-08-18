
import { Route, Routes } from "react-router-dom";
import ParentLayout from "../../component/parentLayout";
import PtHome from "./PtHome";
import PtProfile from "../parentPage/PtProfile";
import PtProject from "../parentPage/PtProject";
import PtStudent from "../parentPage/PtStudent";
import PtResult from "../parentPage/PtResult";
import PtSubject from "../parentPage/PtSubject";
import PtNotice from "../parentPage/PtNotice";


export default function ParentDashboard() {
  // const { user } = useContext(userContext);
  return (
    <div>
      <ParentLayout>
      <Routes>
        <Route path="/" element={<PtHome/>} />
        <Route path="/ptprofile" element={<PtProfile/>} />
        <Route path="/ptproject" element={<PtProject/>} />
        <Route path="/ptstudent" element={<PtStudent/>} />
        <Route path="/ptresult" element={<PtResult/>} />
        <Route path="/ptsubject" element={<PtSubject/>} />
        <Route path="/ptnotice" element={<PtNotice/>} />
        </Routes>
       </ParentLayout>
    </div>
  );
}
