import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Modal, Tooltip } from "antd";
import styled from "styled-components";

const StyledNumber = styled(InputNumber)`
  width: 100%;
`;

const EditButton = ({ record, newData, setNewData }) => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleEditSubmit = (values) => {
    setIsModalOpen(false);
    const index = newData.findIndex((x) => x.name === record.name); //finding index of the array element we want to edit
    const updatedData = [...newData]; //making copy of newData array
    updatedData[index] = values; //updates the item at the specified index with the new values

    setNewData(updatedData);
  };

  const handleEditCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Tooltip title="Edit Button">
        <Button onClick={handleEdit} icon={<EditOutlined />} shape="circle" />
      </Tooltip>
      <Modal
        title={record.name}
        open={isModalOpen}
        onCancel={handleEditCancel}
        footer={[
          <Button key="cancel" onClick={handleEditCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              form.submit();
            }}
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={handleEditSubmit}
          initialValues={record}
        >
          <Form.Item name="name" label="Edit Name">
            <Input />
          </Form.Item>
          <Form.Item name="chinese" label="Edit Chinese">
            <StyledNumber />
          </Form.Item>
          <Form.Item name="math" label="Edit Maths">
            <StyledNumber />
          </Form.Item>
          <Form.Item name="english" label="Edit English">
            <StyledNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditButton;
