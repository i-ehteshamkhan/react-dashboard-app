import { Col, Layout, Row } from "antd";
import React, { useState } from "react";
import BarChart from "./BarChart";
// import { UserData } from "./Data";
const { Content } = Layout;

const style = {
  background: "#0092ff",
  padding: "8px 30px",
  borderRadius: "8px",
  lineHeight: 2,
  fontSize: 16,
  marginBottom: 50,
};

const Home = () => {
  return (
    <Content
      style={{
        padding: "0 24px",
        minHeight: 280,
      }}
    >
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            103 <br /> Campaign
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            230
            <br />
            Customers
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            323
            <br />
            Queries
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            870
            <br />
            Opens
          </div>
        </Col>
      </Row>
      <BarChart />
    </Content>
  );
};

export default Home;
