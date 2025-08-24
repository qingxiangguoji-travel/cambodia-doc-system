import React from "react";
import { useTranslation } from "react-i18next";
import { Layout, Dropdown, Space, Typography } from "antd";
import { GlobalOutlined, UserOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  const { t, i18n } = useTranslation();

  const languageItems = [
    { key: "zh", label: "中文", icon: "🇨🇳" },
    { key: "en", label: "English", icon: "🇺🇸" },
    { key: "km", label: "ភាសាខ្មែរ", icon: "🇰🇭" }
  ].map(item => ({
    ...item,
    label: (
      <Space>
        <span>{item.icon}</span>
        <span>{item.label}</span>
      </Space>
    )
  }));

  const handleLanguageChange = ({ key }) => {
    i18n.changeLanguage(key);
    localStorage.setItem("i18nextLng", key);
  };

  const getCurrentLanguageIcon = () => {
    const icons = { zh: "🇨🇳", en: "🇺🇸", km: "🇰🇭" };
    return icons[i18n.language] || "🌐";
  };

  return (
    <AntHeader style={{ 
      background: "#fff", 
      padding: "0 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      borderBottom: "1px solid #f0f0f0"
    }}>
      <Space>
        <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
          🇰🇭 {t("header.title")}
        </Title>
      </Space>
      
      <Space size="middle">
        <Dropdown
          menu={{
            items: languageItems,
            onClick: handleLanguageChange,
          }}
          trigger={["click"]}
        >
          <Space style={{ 
            cursor: "pointer", 
            padding: "8px 12px",
            borderRadius: "6px",
            ":hover": { background: "#f5f5f5" }
          }}>
            <GlobalOutlined />
            <span>{getCurrentLanguageIcon()}</span>
          </Space>
        </Dropdown>
        
        <Space style={{ 
          cursor: "pointer", 
          padding: "8px 12px",
          borderRadius: "6px"
        }}>
          <UserOutlined />
          <span>管理员</span>
        </Space>
      </Space>
    </AntHeader>
  );
};

export default Header;
