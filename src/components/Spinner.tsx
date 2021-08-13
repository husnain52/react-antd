import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styled from "styled-components";

const StyledSpinner = styled(Spin)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #00000042;
  z-index: 99999;
  display: ${(props) => (props.spinning ? "flex" : "none")};
`;
export default function Spinner(props: any) {
  const { spinning } = props;
  const [loading, setloading] = React.useState(spinning);
  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setloading(false);
      }, 1500);
    }
  }, [loading]);
  const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;
  return <StyledSpinner spinning={loading} indicator={antIcon} />;
}
