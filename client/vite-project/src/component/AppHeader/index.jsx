import React from "react";
import Pricelogo from "../../assets/pricelogo.jpg";
import "../../style.css";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";

function AppHeader() {
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
