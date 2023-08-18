import React from "react";
import AppHeader from "../AppHeader";
import { Space } from "antd";
import SideMenu from "../SideMenu";
import AppFooter from "../AppFooter";
import { useAuth } from "../Auth";
import { Navigate } from "react-router-dom";

export default function StudentLayout({ children }) {
  const auth = useAuth();
  if(!auth.user){ return <Navigate to='/login' />}
  return (
    <>
      <AppHeader />
      <Space className="Content">
        <SideMenu></SideMenu>
      <div>{children}</div> 
      </Space>
      {/* <AppFooter /> */}
    </>
  );
}
