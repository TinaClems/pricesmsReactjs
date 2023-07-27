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

function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/dashboard",
          },
          {
            label: "Profile",
            icon: <UserOutlined />,
            key: "/dashboard/profile",
          },
          {
            label: "Projects",
            icon: <ProjectOutlined />,
            key: "/dashboard/projects",
          },
          {
            label: "Students",
            icon: <TeamOutlined />,
            key: "/dashboard/students",
          },
          {
            label: "Academics",
            icon: <BookOutlined />,
            key: "/dashboard/academics",
          },
          {
            label: "Lecturers",
            icon: <SolutionOutlined />,
            key: "/dashboard/lecturers",
          },
          {
            label: "Faculty",
            icon: <BankOutlined />,
            key: "/dashboard/faculty",
          },
          {
            label: "Subject",
            icon: <BookFilled />,
            key: "/dashboard/subject",
          },
          {
            label: "Notice",
            icon: <ExclamationCircleOutlined />,
            key: "/dashboard/Notice",
          },
          {
            label: "Settings",
            icon: <SettingOutlined />,
            key: "/dashboard/settings",
          },
          {
            label: "Logout",
            icon: <LogoutOutlined />,
            key: "/dashboard/login",
          },
        ]}
      />
    </div>
  );
}

export default SideMenu;
