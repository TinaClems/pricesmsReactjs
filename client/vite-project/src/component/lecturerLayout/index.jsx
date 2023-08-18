import React from "react";
import AppHeader from "../AppHeader";
import { Space } from "antd";
import SideMenu from "../SideMenu";
import AppFooter from "../AppFooter";

export default function LecturerLayout({ children }) {
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
