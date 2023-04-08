import { Form, Input, Checkbox, Row, Col, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import useDocumentTitle from "../../common/documentTitle";
import Spinner from "components/Spinner/Spinner";
import TechnologyBanner from "assets/images/technology-banner.png";
import {
  FormSection,
  HeroSection,
  StyledButton,
  StyledHeroImage,
  StyledLink,
  StyledTitle,
} from "./components/styles";
import { StyledForm } from "components/Form";

export default function Login() {
  useDocumentTitle("Login");
  const history = useHistory();
  const data: any = JSON.parse(localStorage.getItem("users") || "{}");
  const email = data.email && data.email.toLowerCase();
  const password = data.password && data.password.toLowerCase();

  const handleSubmit = (values: any) => {
    if (values.email.toLowerCase() === email && values.password === password) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      history.push("/");
    } else {
      //If credentials entered is invalid
      message.error("Invalid Username/Password");
      return;
    }
  };

  return (
    <>
      <Spinner>
        <Row align="middle" style={{ minHeight: "100vh" }}>
          <Col span={10}>
            <HeroSection>
              <StyledHeroImage src={TechnologyBanner} alt="technology-banner" />
              <StyledTitle>
                Welcome, This is an application built with modern Javascript
                libraries like React JS, ANTD, Redux
              </StyledTitle>
            </HeroSection>
          </Col>
          <Col span={14}>
            <FormSection>
              <StyledForm
                data-testid="form-login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                layout="vertical"
              >
                <Typography.Title style={{ marginBottom: "40px" }}>
                  Login
                </Typography.Title>
                <Form.Item
                  name="email"
                  label="Email"
                  requiredMark="optional"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                    { type: "email", message: "Enter valid email!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Enter Email"
                    type="email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  requiredMark="optional"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Enter Password"
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
              </StyledForm>
            </FormSection>
          </Col>
        </Row>
      </Spinner>
    </>
  );
}
