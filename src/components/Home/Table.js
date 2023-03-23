import React, { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Space,
  Table,
  message,
} from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { tableData } from "./TableData";
import EditButton from "./EditButton";
import styled from "styled-components";

const StyledNumber = styled(InputNumber)`
  width: 100%;
`;

const TableInput = () => {
  const [data, setData] = useState(tableData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    values.key = data.length + 1;
    const newData = [...data, { ...values }];
    setData(newData);
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalOpen(true);
    form.resetFields();
  };

  const handleOk = (string) => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (record) => {
    setData(data.filter((item) => item !== record));
  };

  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      align: "center",
    },
    {
      title: "Math Score",
      dataIndex: "math",
      align: "center",
    },
    {
      title: "English Score",
      dataIndex: "english",
      align: "center",
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <Space>
            <EditButton record={record} newData={data} setNewData={setData} />
            <Divider type="vertical" />
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => handleDelete(record)}
              onCancel={cancel}
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
        <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
          Add New
        </Button>
      }
      style={{
        width: 1100,
        marginBottom: 10,
      }}
    >
      <Modal
        title="Add New Row"
        open={isModalOpen}
        onOk={handleOk}
        okText="Save"
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Chinese Score"
            name="chinese"
            rules={[
              {
                required: true,
                message: "Please input your chinese score!",
              },
            ]}
          >
            <StyledNumber />
          </Form.Item>
          <Form.Item
            label="Math Score"
            name="math"
            rules={[
              {
                required: true,
                message: "Please input your math score!",
              },
            ]}
          >
            <StyledNumber />
          </Form.Item>
          <Form.Item
            label="English Score"
            name="english"
            rules={[
              {
                required: true,
                message: "Please input your english score!",
              },
            ]}
          >
            <StyledNumber />
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 300 }}
      />
    </Card>
  );
};

export default TableInput;
