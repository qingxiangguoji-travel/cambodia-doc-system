import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Row, Col, Statistic, Progress, Typography } from "antd";
import { 
  UserOutlined, 
  FileTextOutlined, 
  BarChartOutlined,
  CheckCircleOutlined 
} from "@ant-design/icons";

const { Title } = Typography;

const Home = () => {
  const { t } = useTranslation();

  const statsData = [
    {
      title: t("home.totalCustomers"),
      value: 1247,
      icon: <UserOutlined />,
      color: "#52c41a"
    },
    {
      title: t("home.pendingDocuments"),
      value: 23,
      icon: <FileTextOutlined />,
      color: "#faad14"
    },
    {
      title: t("home.completedThisMonth"),
      value: 156,
      icon: <CheckCircleOutlined />,
      color: "#1890ff"
    },
    {
      title: "总收入",
      value: 128900,
      prefix: "$",
      icon: <BarChartOutlined />,
      color: "#722ed1"
    }
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>{t("home.dashboard")}</Title>
      
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {statsData.map((stat, index) => (
          <Col key={index} xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.icon}
                valueStyle={{ color: stat.color }}
                {...(stat.prefix && { prefix: stat.prefix })}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title={t("home.systemOverview")}>
            <p>{t("header.welcome")}</p>
            <Progress 
              percent={75} 
              status="active" 
              style={{ margin: "16px 0" }}
            />
            <p>{t("home.developmentProgress")}：75%</p>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <Card title="最近活动" size="small">
            <p>• 用户张三提交了护照申请</p>
            <p>• 李四的签证已审核通过</p>
            <p>• 新客户王五注册成功</p>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="系统消息" size="small">
            <p>• 系统运行正常</p>
            <p>• 备份已完成</p>
            <p>• 暂无待处理告警</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
