import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Divider, Popconfirm, Space } from "antd";
import {
  DeleteOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { StyledTable } from "../styles";

const TableInput = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = (record) => {
    setData(data.filter((item) => item !== record));
  };

  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://randomuser.me/api/?nat=us&randomapi&results=100"
    ).then((res) => res.json());

    const results = response.results;
    setData(results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      dataIndex: "picture",
      align: "center",
      render: (picture) => (
        <Avatar src={<img src={picture.large} alt="avatar" />} />
      ),
      width: 60,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => `${name.first} ${name.last}`,
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 220,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <Space>
            <Divider type="vertical" />
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <Button icon={<DeleteOutlined />} shape="circle" />
            </Popconfirm>
          </Space>
        );
      },
      align: "center",
    },
  ];

  return (
    <Card
      title="Table"
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={getData}>
          Fetch Data
        </Button>
      }
    >
      <StyledTable
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 300 }}
        loading={{ spinning: loading, indicator: <LoadingOutlined /> }}
      />
    </Card>
  );
};

export default TableInput;
