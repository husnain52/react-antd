import { Form, Button, Input, Checkbox, Row, Col, Typography, message } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useHistory } from 'react-router-dom';
import useDocumentTitle from '../../common/documentTitle';
import Spinner from "../../components/Spinner";


const StyledLink = styled.a`
  float:right;
`;
const StyledButton = styled(Button)`
  width:-webkit-fill-available;
`;

export default function Login() {
  useDocumentTitle('Login')
  const history = useHistory();
  const data:any = JSON.parse(localStorage.getItem('users') || '{}');
  const email = data.email && data.email.toLowerCase();
  const password = data.password && data.password.toLowerCase();
  
  const handleSubmit = (values: any) => {
   if (
      values.email.toLowerCase() === email &&
      values.password === password
    ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      history.push("/")
    } 
    else {
      //If credentials entered is invalid
      message.error("Invalid Username/Password")
      return;
    }
  };
  return (
    <>
      <Spinner spinning />
      <Row justify="center" align="middle" style={{minHeight:'100vh'}}>
        
        <Col span={6}>
          <Form
            name="normal_login"
            data-testid="form-login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
          >
            <Form.Item>
              <Typography.Title>Login</Typography.Title>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                {type:"email",message:"Enter valid email!"}
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                type="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <StyledLink className="login-form-forgot" href="">
                Forgot password
              </StyledLink>
            </Form.Item>

            <Form.Item>
              <StyledButton
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </StyledButton>
            </Form.Item>
            <Form.Item>
              or <Link to="/sign-up">Register now!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
