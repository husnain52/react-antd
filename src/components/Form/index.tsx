import { Form } from "antd";
import styled from "styled-components";

const StyledForm = styled(Form)`
  width: 100%;
  && .ant-input-affix-wrapper {
    border-radius: 35px;
    height: 37px;
  }
`;

export { StyledForm };
