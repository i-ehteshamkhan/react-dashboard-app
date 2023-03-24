import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Home from "./components/Home/Index";
import Navbar from "./components/Navbar/Index";
import Sidebar from "./components/Sidebar/Index";
import GlobalStyle from "./styles/globalstyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Widgets from "./views/Widgets";
import { Provider } from "react-redux";
import store from "./redux/store";
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
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Layout>
          <Navbar />
          <Content>
            <StyledLayout>
              <Sidebar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/widgets" element={<Widgets />} />
                {/* <Route path="/widgets" element={<Widgets />} /> */}
              </Routes>
            </StyledLayout>
          </Content>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
