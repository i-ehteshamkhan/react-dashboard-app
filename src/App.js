import { Layout, theme } from "antd";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import GlobalStyle from "./styles/globalstyles";
const { Content } = Layout;
// const items1 = ["Calender", "Messages", "Social", "Chats"].map((key) => ({
//   key,
//   label: `${key}`,
// }));

// const style = {
//   background: "#0092ff",
//   padding: "8px 30px",
// };
// const StyledHeader = styled(Header)`
//   &&.ant-layout-header {
//     background-color: white;
//     padding-inline: 0;
//   }
// `;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <GlobalStyle />
      <Layout>
        {/* <StyledHeader>
           <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
          <Menu mode="horizontal" items={[{ key: 1, label: "test" }]} />
          
          <div>testsmdmbsdvsdvshdbsnh</div>
        </StyledHeader> */}
        <Navbar />
        <Content style={{}}>
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
            }}
          >
            <Sidebar />
            <Home />
            {/* <Content
              style={{
                padding: "0 24px",
                minHeight: 280,
              }}
            >
              <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                  <div style={style}>103</div>
                  <div style={style}>Campaign</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>230</div>
                  <div style={style}>Customers</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>323</div>
                  <div style={style}>Queries</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>870</div>
                  <div style={style}>Opens</div>
                </Col>
              </Row>
            </Content> */}
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default App;
