import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import enUS from "antd/locale/en_US";
import kmKH from "antd/locale/km_KH";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./App.css";

import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Home from "./pages/Home";

const { Content } = Layout;

// Antd 多语言配置
const antdLocales = {
  zh: zhCN,
  en: enUS,
  km: kmKH
};

function App() {
  const { i18n } = useTranslation();

  return (
    <ConfigProvider locale={antdLocales[i18n.language] || zhCN}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Layout>
            <Sidebar />
            <Layout style={{ padding: "24px" }}>
              <Content style={{
                background: "#fff",
                padding: "24px",
                margin: 0,
                minHeight: 280,
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
              }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/documents" element={
                    <div>
                      <h2>证件管理</h2>
                      <p>证件管理页面开发中...</p>
                    </div>
                  } />
                  <Route path="/customers" element={
                    <div>
                      <h2>客户管理</h2>
                      <p>客户管理页面开发中...</p>
                    </div>
                  } />
                  <Route path="/reports" element={
                    <div>
                      <h2>报表统计</h2>
                      <p>报表统计页面开发中...</p>
                    </div>
                  } />
                  <Route path="/settings" element={
                    <div>
                      <h2>系统设置</h2>
                      <p>系统设置页面开发中...</p>
                    </div>
                  } />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
