import { Space, Card, Statistic, Typography } from "antd";
import {UserOutlined, BellOutlined,TeamOutlined,UsergroupAddOutlined, BookOutlined, ProjectOutlined,
} from "@ant-design/icons";
// import "../../App.css";
import { useAuth } from "../../component/Auth";

export default function AdHome() {
  const auth = useAuth();
  const { email, _id, userType, name } = auth?.user;

  // const { user } = useContext(userContext);
  return (
    <div>
      <div>
        <Typography.Title level={4}> Admin Dashboard</Typography.Title>
        <Space>
          <DashboardCard
            icon={
              <ProjectOutlined
                style={{
                  color: "purple",
                  background: "rgba(0, 0, 0, 0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Projects"
            value={567}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "purple",
                  background: "rgba(0, 255, 0, 0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Students"
            value={40}
          />
          <DashboardCard
            icon={
              <TeamOutlined
                style={{
                  color: "purple",
                  background: "rgba(255, 0, 0, 0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Lecturers"
            value={35}
          />

          <DashboardCard
            icon={
              <UsergroupAddOutlined
                style={{
                  color: "purple",
                  background: "rgba(0, 0, 255, 0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Faculty"
            value={3}
          />

          <DashboardCard
            icon={
              <BookOutlined
                style={{
                  color: "purple",
                  background: "rgba(0, 0, 0, 0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Subject"
            value={24}
          />
          <DashboardCard
            icon={
              <BellOutlined
                style={{
                  color: "purple",
                  background: "rgba(0, 0, 0, 0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title="Notice"
            value={19}
          />
        </Space>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, value, style }) {
  return (
    <Card style={style}>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
