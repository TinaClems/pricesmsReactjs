import React from "react";
import {
  AppstoreOutlined,
  UserOutlined,
  ProjectOutlined,
  TeamOutlined,
  BookOutlined,
  SolutionOutlined,
  BankOutlined,
  BookFilled,
  ExclamationCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";

function SideMenu() {
  const navigate = useNavigate();
  const auth = useAuth()
// the global logout function
  const handleLogout = () => {
    auth.logout()
    navigate('/', {replace: true})
  }

  const user = auth?.user.userType;

  return (<>
    {user && <div className="SideMenu">
      {/* admin SideMenu */}
      {user === "admin" && (
        <Menu
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/admin/dashboard",
            },

            {
              label: "Profile",
              icon: <UserOutlined />,
              key: "/admin/dashboard/profile",
            },
            {
              label: "Projects",
              icon: <ProjectOutlined />,
              key: "/admin/dashboard/projects",
            },
            {
              label: "Students",
              icon: <TeamOutlined />,
              key: "/admin/dashboard/students",
            },
            {
              label: "Academics",
              icon: <BookOutlined />,
              key: "/admin/dashboard/academics",
            },
            {
              label: "Lecturers",
              icon: <SolutionOutlined />,
              key: "/admin/dashboard/lecturers",
            },
            {
              label: "Faculty",
              icon: <BankOutlined />,
              key: "/admin/dashboard/faculty",
            },
            {
              label: "Subject",
              icon: <BookFilled />,
              key: "/admin/dashboard/subject",
            },
            {
              label: "Notice",
              icon: <ExclamationCircleOutlined />,
              key: "/admin/dashboard/Notice",
            },
            {
              label: "Settings",
              icon: <SettingOutlined />,
              key: "/admin/dashboard/Settings",
            },
          
          ]}
        />
      )}

      {/* student SideMenu */}
      {user === "student" && (
        <Menu
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/student/dashboard",
            },
            {
              label: "Profile",
              icon: <UserOutlined />,
              key: "/student/dashboard/profile",
            },
            {
              label: "Projects",
              icon: <ProjectOutlined />,
              key: "/student/dashboard/projects",
            },
            {
              label: "Academics",
              icon: <BookOutlined />,
              key: "/student/dashboard/academics",
            },
            {
              label: "Faculty",
              icon: <BankOutlined />,
              key: "/student/dashboard/faculty",
            },
            {
              label: "Subject",
              icon: <BookFilled />,
              key: "/student/dashboard/subject",
            },
            {
              label: "Notice",
              icon: <ExclamationCircleOutlined />,
              key: "/student/dashboard/Notice",
            },
         
          ]}
        />
      )}

      {/* lecturers sidemenu */}
      {user === "lecturer" && (
        <>
        <Menu
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/admin/dashboard",
            },

            {
              label: "Profile",
              icon: <UserOutlined />,
              key: "/admin/dashboard/profile",
            },
            {
              label: "Projects",
              icon: <ProjectOutlined />,
              key: "/admin/dashboard/projects",
            },
            {
              label: "Students",
              icon: <TeamOutlined />,
              key: "/admin/dashboard/students",
            },
            {
              label: "Academics",
              icon: <BookOutlined />,
              key: "/admin/dashboard/academics",
            },
            {
              label: "Lecturers",
              icon: <SolutionOutlined />,
              key: "/admin/dashboard/lecturers",
            },
            {
              label: "Faculty",
              icon: <BankOutlined />,
              key: "/admin/dashboard/faculty",
            },
            {
              label: "Subject",
              icon: <BookFilled />,
              key: "/admin/dashboard/subject",
            },
            {
              label: "Notice",
              icon: <ExclamationCircleOutlined />,
              key: "/admin/dashboard/Notice",
            },
            {
              label: "Settings",
              icon: <SettingOutlined />,
              key: "/admin/dashboard/Settings",
            },
          ]}
        />
        {/* <button onClick={()=> handleLogout()}>Logout</button> */}
        </>
      )}

      {/* Parents Sidemenu */}
      {user === "parent" && (
        <Menu
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/admin/dashboard",
            },

            {
              label: "Profile",
              icon: <UserOutlined />,
              key: "/admin/dashboard/profile",
            },
            {
              label: "Projects",
              icon: <ProjectOutlined />,
              key: "/admin/dashboard/projects",
            },
            {
              label: "Students",
              icon: <TeamOutlined />,
              key: "/admin/dashboard/students",
            },
            {
              label: "Academics",
              icon: <BookOutlined />,
              key: "/admin/dashboard/academics",
            },
           
            {
              label: "Settings",
              icon: <SettingOutlined />,
              key: "/admin/dashboard/Settings",
            },
         
          ]}
        />
      )}
      <LogoutOutlined />,
      <button onClick={()=> handleLogout()}>Logout</button>
     
    </div>}</>
  );
}

export default SideMenu;
