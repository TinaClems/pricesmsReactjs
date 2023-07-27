// import { Space } from "antd";
// import { useContext } from "react";
// import { userContext } from "../context/userContext";
// import AppHeader from "./component/AppHeader";
// import SideMenu from "./component/SideMenu";
// // import Content from "./component/Content";
// import AppFooter from "./component/AppFooter";
// import "./App.css";
// import AppRoutes from "./component/AppRoutes";
// import Dashboard from "./pages/Dashboard";
// // import Dash from "../src/component/Dash";

// // Define landing page and login page components
// const LandingPage = () => <h1>Landing Page</h1>;
// const LoginPage = () => <h1>Login Page</h1>;

// export default function App() {
//   const { user } = useContext(userContext);
//   return (
//     <div className="App">
//       {}
//       <AppHeader />
//       <Space className="Side-Content">
//         <SideMenu></SideMenu>
//          <AppRoutes />
//         {/* <switch> */}

//         {/* </switch> */}
//       </Space>
//       <AppFooter />
//       {/* <Dash /> */}
//       {/* /* {!!user && <h1>Hi {user.name}!</h1>} */}
//     </div>
//   );
// }

import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";

import axios from 'axios'

axios.defaults.baseURL ='http://localhost:8001'
axios.defaults.withCredentials = true
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route exact path="/dashboard/*" element={<Dashboard />} />
        

      </Routes>
    </>
  );
};

export default App;
