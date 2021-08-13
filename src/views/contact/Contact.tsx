import React from "react";
import { Form, Input, Button, Select } from "antd";
import Modal from "antd/lib/modal/Modal";
import useDocumentTitle from "../../common/documentTitle";
import Spinner from "../../components/Spinner";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};

export default function Contact() {
  useDocumentTitle("Contact Page");
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [values, setvalues] = React.useState(null);
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
  const showModal = () => {
    if (values) {
      setIsModalVisible(true);
    }
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    setvalues(values);
  };
  const namePattern = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
  const phoneRegEx =
    /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "+92",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
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
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
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
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
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
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
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

                return Promise.reject(new Error("Enter a valid phone number!"));
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
          label="Gender"
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
          <Button type="primary" onClick={showModal} htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleOk}
        >
          <p>asasak</p>
        </Modal>
      </Form>
    </>
  );
}
