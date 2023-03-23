import React from "react";
import BarChart from "./BarChart";
import { Layout } from "antd";
import Grid from "./Grid";
import Table from "./Table";

const { Content } = Layout;

const Home = () => {
  return (
    <Content>
      <Grid />
      <Table />
      <BarChart />
    </Content>
  );
};

export default Home;
