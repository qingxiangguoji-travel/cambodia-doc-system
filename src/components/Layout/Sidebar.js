import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { 
  HomeOutlined, 
  FileTextOutlined, 
  UserOutlined, 
  BarChartOutlined,
  SettingOutlined 
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: t("navigation.home")
    },
    {
      key: "/documents",
      icon: <FileTextOutlined />,
      label: t("navigation.documents")
    },
    {
      key: "/customers",
      icon: <UserOutlined />,
      label: t("navigation.customers")
    },
    {
      key: "/reports",
      icon: <BarChartOutlined />,
      label: t("navigation.reports")
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: t("navigation.settings")
    }
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Sider 
      width={250} 
      style={{ 
        background: "#fff",
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)"
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{ 
          borderRight: 0,
          height: "100%",
          paddingTop: "16px"
        }}
      />
    </Sider>
  );
};

export default Sidebar;
