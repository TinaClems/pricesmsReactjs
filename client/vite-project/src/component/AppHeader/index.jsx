import React from "react";
import Pricelogo from "../../assets/pricelogo.jpg";
import "../../style.css";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth";

function AppHeader() {
  const auth = useAuth();
  if(!auth.user){ return <Navigate to='/login' />}
  return (
    <div className="AppHeader">
      <img src={Pricelogo} width={40} className="App-logo" alt="logo" />
      <Typography.Title>PRICE DASHBOARD</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled  style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}

export default AppHeader;
