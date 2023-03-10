import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import styled from "styled-components";

const items1 = ["Calender", "Messages", "Social", "Chats"].map((key) => ({
  key,
  label: `${key}`,
}));

const StyledHeader = styled(Header)`
  display: flex;
  background-color: white;
  padding-inline: 0px;
`;
const Navbar = () => {
  return (
    <StyledHeader>
      {/* <div className="logo" /> */}
      <Menu
        theme="light"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
        items={items1}
      />
      {/* <Menu mode="horizontal" items={[{ key: 1, label: "test" }]} />*/}
      <div>testsmdmbsdvsdvshdbsnh</div>
    </StyledHeader>
  );
};

export default Navbar;
