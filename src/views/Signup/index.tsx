import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Typography,
  message,
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userData } from "../Login/slice";
import useDocumentTitle from "../../common/documentTitle";
import Spinner from "components/Spinner/Spinner";

const { Option } = Select;

export default function Signup() {
  useDocumentTitle("Signup for an Account");
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue="+92"
        style={{
          width: 70,
        }}
      >
        <Option value="+92">+92</Option>
        <Option value="+1">+1</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values: any) => {
    message.success("User enrolled successfully!");
    dispatch(userData(values));
    localStorage.setItem("users", JSON.stringify(values));
    history.push("/login");
  };
  const namePattern = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
  const phoneRegEx =
    /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  return (
    <>
      <Spinner>
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col span={6}>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: "+92",
              }}
              scrollToFirstError
            >
              <Form.Item>
                <Typography.Title>Signup</Typography.Title>
              </Form.Item>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                  () => ({
                    validator(_, value) {
                      if (!value || namePattern.test(value)) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error("Enter your full name!"));
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Enter a valid email!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  prefix={<MailOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  () => ({
                    validator(_, value) {
                      if (!value || value.length >= 8) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Password should be minimum 8 characters!")
                      );
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords that you entered do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <Form.Item
                name="phone number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  () => ({
                    validator(_, value) {
                      if (!value || phoneRegEx.test(value)) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("Enter a valid phone number!")
                      );
                    },
                  }),
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please select gender!",
                  },
                ]}
              >
                <Select placeholder="Select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spinner>
    </>
  );
}
