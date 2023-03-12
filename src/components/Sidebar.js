import { Layout, Menu } from "antd";
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
const { Sider } = Layout;

// const items2 = [HomeOutlined, ShoppingOutlined, FireOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   }
// );
const sideItems = [
  {
    key: 1,
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: 2,
    icon: <ShoppingOutlined />,
    label: "Apps",
    children: new Array(4).fill(null).map((_, j) => {
      return {
        key: 1,
        label: `option`,
      };
    }),
  },
  {
    key: 3,
    icon: <FireOutlined />,
    label: "Widgets",
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
const Sidebar = () => {
  return (
    <Sider
      style={{
        background: "black",
      }}
      width={200}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
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
