import React, { useState } from "react";
import {
  Button,
  Card,
  InputNumber,
  Layout,
  Radio,
  Space,
  Tooltip,
  Typography,
} from "antd";
import TableInput from "./components/Table";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, updateType } from "./slice";

const { Content } = Layout;

const Widgets = () => {
  const dispatch = useDispatch();

  // state get krne k lye
  const count = useSelector((state) => state.counter.value);
  const type = useSelector((state) => state.counter.type);
  // state update

  // const [count, setCount] = useState(1);
  const [value, setValue] = useState(null);
  console.log(count);

  const handleAdd = () => {
    // setCount(count + 1);
    dispatch(updateType());
  };

  const handleSubtract = () => {
    // setCount(count - 1);
    dispatch(decrement());
  };

  return (
    <Content>
      <Card title="Redux" style={{ marginBottom: 20 }}>
        <Typography.Title>{count}</Typography.Title>
        <Space>
          <Radio.Group>
            <Tooltip title="Add" placement="bottom">
              <Radio.Button value="increment" onClick={handleAdd}>
                <PlusOutlined />
              </Radio.Button>
            </Tooltip>
            <Tooltip title="Subtract" placement="bottom">
              <Radio.Button value="decrement" onClick={handleSubtract}>
                <MinusOutlined />
              </Radio.Button>
            </Tooltip>
          </Radio.Group>
          OR
          <InputNumber
            placeholder="Input Value"
            style={{ width: 200 }}
            onChange={(e) => setValue(e)}
            onPressEnter={() => dispatch(incrementByAmount(value))}
          />
          <Button onClick={() => dispatch(incrementByAmount(value))}>
            Save
          </Button>
        </Space>
      </Card>
      <TableInput />
    </Content>
  );
};

export default Widgets;
