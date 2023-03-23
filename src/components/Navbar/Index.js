import {
  BellOutlined,
  InteractionOutlined,
  PlaySquareOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, message } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import styled from "styled-components";

const StyledLogo = styled.span`
  color: black;
  font-weight: 600;
  font-size: 21px;
`;

const StyledLabel = styled.span`
  font-size: 15px;
  color: rgba(59, 43, 21, 0.4);
`;
const navItems = [
  {
    key: 1,
    label: <StyledLogo>One</StyledLogo>,
    icon: <PlaySquareOutlined style={{ fontSize: 21, color: "#0d00ff" }} />,
  },
  {
    key: 2,
    label: <StyledLabel>Calendar</StyledLabel>,
  },
  {
    key: 3,
    label: <StyledLabel>Social</StyledLabel>,
  },
  {
    key: 4,
    label: <StyledLabel>Messages</StyledLabel>,
  },
  {
    key: 5,
    label: <StyledLabel>Chats</StyledLabel>,
  },
];
const navItemsRight = [
  {
    key: 1,
    icon: <InteractionOutlined style={{ fontSize: 21, color: "#0d00ff" }} />,
  },
  {
    key: 2,
    icon: <SettingOutlined style={{ fontSize: 21, color: "#0d00ff" }} />,
  },
  {
    key: 3,
    icon: <BellOutlined style={{ fontSize: 21, color: "#0d00ff" }} />,
  },
  {
    key: 4,
    icon: (
      <Avatar
        icon={
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user-pic"
          />
        }
      />
    ),
  },
];

const StyledHeader = styled(Header)`
  display: flex;
  background-color: white;
  padding-inline: 0px;
  justify-content: space-between;
  align-items: center;
  .ant-menu {
    width: 100%;
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
  .menu-right {
    width: auto;
  }
`;
// eslint-disable-next-line
const StyledButton = styled(Button)`
  text-decoration: none;
  border: none;
  height: 65px;
  box-shadow: none;
`;
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <SettingOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <SettingOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <SettingOutlined />,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <SettingOutlined />,
  },
];
// eslint-disable-next-line
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const Navbar = () => {
  return (
    <StyledHeader>
      <Menu theme="light" mode="horizontal" items={navItems} />
      <Menu mode="horizontal" className="menu-right" items={navItemsRight} />
    </StyledHeader>
  );
};

export default Navbar;
