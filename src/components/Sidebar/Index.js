import { Button, Layout, Menu, Typography } from "antd";
import React from "react";
import {
  CompassOutlined,
  CrownOutlined,
  FireOutlined,
  HomeOutlined,
  LayoutOutlined,
  PictureOutlined,
  PieChartOutlined,
  ShoppingOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const { Sider } = Layout;

const AppChild = [
  {
    key: 10,
    label: "Calendar",
  },
  {
    key: 11,
    label: "Messages",
  },
  {
    key: 12,
    label: "Social",
  },
  {
    key: 13,
    label: "Chats",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const sideItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Home",
      onClick: () => {
        navigate("/");
      },
    },
    {
      key: "/widgets",
      icon: <FireOutlined />,
      label: "Widgets",
      onClick: () => {
        navigate("/widgets");
      },
    },
    {
      key: 2,
      icon: <ShoppingOutlined />,
      label: "Apps",
      children: AppChild,
    },

    {
      key: 4,
      icon: <LayoutOutlined />,
      label: "Taskboard",
    },
    {
      key: 5,
      icon: <PieChartOutlined />,
      label: "Charts",
      children: new Array(4).fill(null).map((_, j) => {
        return {
          key: 1,
          label: `option`,
        };
      }),
    },
    {
      key: 6,
      icon: <PictureOutlined />,
      label: "Media",
      children: new Array(4).fill(null).map((_, j) => {
        return {
          key: 1,
          label: `option`,
        };
      }),
    },
    {
      key: 7,
      icon: <CompassOutlined />,
      label: "Maps",
      children: new Array(4).fill(null).map((_, j) => {
        return {
          key: 1,
          label: `option`,
        };
      }),
    },
    {
      key: 8,
      icon: <CrownOutlined />,
      label: "Extras",
      children: new Array(4).fill(null).map((_, j) => {
        return {
          key: 1,
          label: `option`,
        };
      }),
    },
    {
      key: 9,
      icon: <UnlockOutlined />,
      label: "Authentication",
      children: new Array(4).fill(null).map((_, j) => {
        return {
          key: 1,
          label: `option`,
        };
      }),
    },
  ];

  return (
    <Sider
      style={{
        background: "black",
      }}
      width={200}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={[window.location.pathname]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
        }}
        items={sideItems}
      />
    </Sider>
  );
};

export default Sidebar;
