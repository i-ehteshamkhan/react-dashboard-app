import React from "react";
import { Layout, theme } from "antd";
import styled from "styled-components";
import Home from "./components/Home/Index";
import Navbar from "./components/Navbar/Index";
import Sidebar from "./components/Sidebar/Index";
import GlobalStyle from "./styles/globalstyles";
const { Content } = Layout;

const StyledLayout = styled(Layout)`
  &&& .ant-layout-content {
    height: calc(100vh - 64px);
    overflow: auto;
    padding: 24px 24px;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <Content>
          <StyledLayout>
            <Sidebar />
            <Home />
          </StyledLayout>
        </Content>
      </Layout>
    </>
  );
};

export default App;
