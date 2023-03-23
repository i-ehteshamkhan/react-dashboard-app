import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const Compose = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Compose Message
      </Button>
      <Modal
        title="Message"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TextArea />
      </Modal>
    </>
  );
};
export default Compose;
