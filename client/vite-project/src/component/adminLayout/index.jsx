import React from "react";
import AppHeader from "../AppHeader";
import { Space } from "antd";
import SideMenu from "../SideMenu";
import AppFooter from "../AppFooter";
import { useAuth } from "../Auth";

export default function AdminLayout({ children }) {
  const auth = useAuth()
  return (
    <>
      <AppHeader />
      <Space className="Content">
        <SideMenu></SideMenu>
      <div>{children}</div> 
      </Space>
      <AppFooter />
    </>
  );
}
