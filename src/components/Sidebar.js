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
// eslint-disable-next-line
// const items2 = [
//   HomeOutlined,
//   ShoppingOutlined,
//   FireOutlined,
//   LayoutOutlined,
//   PieChartOutlined,
//   PictureOutlined,
//   CompassOutlined,
//   CrownOutlined,
//   UnlockOutlined,
// ].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = { name };
//       return {
//         key: subKey,
//         label: `${subKey}`,
//       };
//     }),
//   };
// });
// const name = [
//   {
//     key: ``,
//     icon: React.createElement(HomeOutlined),
//     label: <div>One </div>,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = 12;
//       return {
//         key: subKey,
//         label: `${subKey}`,
//       };
//     }),
//   },
//   {
//     key: ``,
//     icon: React.createElement(HomeOutlined),
//     label: `jjvjvjvjhv`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = 1;
//       return {
//         key: subKey,
//         label: `${subKey}`,
//       };
//     }),
//   },
//   {
//     key: ``,
//     icon: React.createElement(HomeOutlined),
//     label: `jjvjvjvjhv`,
//     // children: new Array(4).fill(null).map((_, j) => {
//     //   const subKey = 1;
//     //   return {
//     //     key: subKey,
//     //     label: `${subKey}`,
//     //   };
//     // }),
//   },
// ];
const items2 = [CompassOutlined, CrownOutlined, FireOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
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
        items={items2}
      />
    </Sider>
  );
};
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <>
//       <Layout
//         style={{
//           padding: "24px 0",
//           background: colorBgContainer,
//         }}
//       >
//         <Sider
//           style={{
//             background: colorBgContainer,
//           }}
//           width={200}
//         >
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={["1"]}
//             defaultOpenKeys={["sub1"]}
//             style={{
//               height: "100%",
//             }}
//             items={name}
//           />
//         </Sider>
//       </Layout>
//     </>
//   );

export default Sidebar;
