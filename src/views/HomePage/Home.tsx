import React from "react";
import {
  Button,
  Space,
  Typography,
  Input,
  PageHeader,
  Descriptions,
} from "antd";
import styled from "styled-components";
import { RootState } from "../../redux-toolkit/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./slice";
import useDocumentTitle from "../../common/documentTitle";
import { useInjectReducer } from "redux-injectors";
import reducer from "./slice";

interface IStateProps {
  number: number;
  array: any[];
}
const StyledTitle = styled(Typography)`
  color: red;
  font-size: 17px;
`;

const StyledButton = styled(Button)`
  color: #fff;
  background-color: ${(props) => props.color || "red"};
  &:hover {
    background-color: #303f69;
    color: #fff;
  }
`;

const Home = () => {
  useInjectReducer({ key: "home", reducer });
  useDocumentTitle("Home Page 👻");
  const dispatch = useDispatch();
  const [state, setstate] = React.useState<IStateProps>({
    number: 0,
    array: [{ name: "Add" }],
  });

  const count = useSelector((state: RootState) => 1);

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  const handleChange = (e: any) => {
    setstate({ ...state, number: e.target.value });
  };
  const handleSetValue = () => {
    dispatch(incrementByAmount(state.number));
  };

  const handleAdd = () => {
    let newArr = state.array;
    let obj: any = { name: "dsbdsj" };
    const finalArr = [obj].concat(newArr);
    setstate({ ...state, array: finalArr });
  };

  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Association">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Creation Time">
            2017-01-10
          </Descriptions.Item>
          <Descriptions.Item label="Effective Time">
            2017-10-10
          </Descriptions.Item>
          <Descriptions.Item label="Remarks">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <StyledTitle>Count: {count}</StyledTitle>
      <Space size="middle" direction="vertical">
        <StyledButton onClick={handleIncrement} color="blue">
          Increment
        </StyledButton>
        <StyledButton onClick={handleDecrement}>Decrement</StyledButton>
        <Input onChange={handleChange} type="number" />
        <StyledButton onClick={handleSetValue}>Set Value</StyledButton>
        {state.array.map(function (cell: any, i: number) {
          if (i === 0) {
            return (
              <Button key={i} onClick={handleAdd}>
                {cell.name}
              </Button>
            );
          } else if (i > 0) {
            return (
              <>
                <Button key={i} onClick={handleAdd}>
                  {cell.name}
                </Button>
                <Button>second</Button>
              </>
            );
          }
        })}
      </Space>
    </>
  );
};

export default Home;
