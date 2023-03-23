import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Modal, Tooltip } from "antd";
import { tableData } from "./TableData";
import styled from "styled-components";

const StyledNumber = styled(InputNumber)`
  width: 100%;
`;

const Edit = () => {
  const [data, setData] = useState(tableData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  // const showModal = () => {
  //   setIsModalOpen(true);
  //   form.resetFields();
  // };

  // const handleOk = () => {
  //   // form.submit();
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const [form] = Form.useForm();

  // const showModal = () => {
  //   setIsModalOpen(true);
  //   form.resetFields();
  // };

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
    form.resetFields();
  };

  const handleEditSubmit = (values) => {
    const newData = data.map((item) =>
      item === editingRecord ? { ...item, ...values } : item
    );
    setData(newData);
    // setEditingRecord(null);
    setIsModalOpen(false);
  };

  const handleEditCancel = () => {
    // setEditingRecord(null);
    setIsModalOpen(false);
  };

  // console.log(isModalOpen);
  // return (
  //   <div>
  //     <Tooltip title="Edit Record">
  //       <Button onClick={showModal} icon={<EditOutlined />} shape="circle" />
  //     </Tooltip>
  //     <Modal
  //       title="Make Changes"
  //       open={isModalOpen}
  //       onOk={handleOk}
  //       onCancel={handleCancel}
  //     >
  //       <Form
  //         // form={form}
  //         name="basic"
  //         labelCol={{
  //           span: 8,
  //         }}
  //         wrapperCol={{
  //           span: 16,
  //         }}
  //       >
  //         <Form.Item label="Edit Name" name="edit name">
  //           <Input />
  //         </Form.Item>
  //         <Form.Item label="Edit Chinese" name="edit chinese">
  //           <InputNumber />
  //         </Form.Item>
  //         <Form.Item label="Edit Math" name="edit math">
  //           <InputNumber />
  //         </Form.Item>
  //         <Form.Item label="Edit English" name="edit english">
  //           <InputNumber />
  //         </Form.Item>
  //       </Form>
  //     </Modal>
  //   </div>
  // );
  return (
    <>
      <Tooltip title="Edit Record">
        <Button onClick={handleEdit} icon={<EditOutlined />} shape="circle" />
      </Tooltip>
      <Modal
        title="Edit"
        open={isModalOpen}
        onCancel={handleEditCancel}
        footer={[
          <Button key="cancel" onClick={handleEditCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={form.submit}>
            Submit
          </Button>,
        ]}
      >
        <Form
          form={form}
          onFinish={handleEditSubmit}
          initialValues={editingRecord}
        >
          <Form.Item name="edit name" label="Edit Name">
            <Input />
          </Form.Item>
          <Form.Item name="edit chinese" label="Edit Chinese">
            <StyledNumber />
          </Form.Item>
          <Form.Item name="edit maths" label="Edit Maths">
            <StyledNumber />
          </Form.Item>
          <Form.Item name="edit english" label="Edit English">
            <StyledNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
