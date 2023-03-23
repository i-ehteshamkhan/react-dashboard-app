import React from "react";
import {
  PictureOutlined,
  PieChartOutlined,
  ShoppingOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Typography } from "antd";
import styled from "styled-components";

const style = {
  color: "white",
  borderRadius: "8px",
  marginBottom: 24,
  padding: "15px",
};

const StyledTypography = styled(Typography)`
  color: ${(props) => (props.large ? "#ffff" : "rgb(233 233 233)")};
  font-size: ${(props) => (props.large ? "21px" : "15px")};
`;

const StyledSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
  && svg {
    font-size: 21px;
  }
`;

const GutterRow = [
  {
    number: 103,
    text: "Campaign",
    icon: <PictureOutlined />,
    background: "#007BFF",
  },
  {
    number: 230,
    text: "Customers",
    icon: <PieChartOutlined />,
    background: "#333333",
  },
  {
    number: 323,
    text: "Queries",
    icon: <ShoppingOutlined />,
    background: "#FAAD14",
  },
  {
    number: 870,
    text: "Opens",
    icon: <UnlockOutlined />,
    background: "#F5222D",
  },
];

const Grid = () => {
  return (
    <Row gutter={16}>
      {GutterRow.map(({ icon, number, background, text }) => (
        <Col span={6}>
          <div style={{ ...style, background: background }}>
            <StyledTypography large={true}>{number}</StyledTypography>
            <StyledSpace>
              <StyledTypography>{text}</StyledTypography>
              <span>{icon}</span>
            </StyledSpace>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Grid;
