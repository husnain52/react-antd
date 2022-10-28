import React from "react";
import {
  Tooltip,
  Button,
  Input,
  Select,
  Upload,
  Form,
  Drawer,
  message,
  Modal,
} from "antd";
import {
  EditOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { userData } from "views/Login/slice";
const { Option } = Select;

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default function EditDetails() {
  const dispatch = useDispatch();
  const data: any = JSON.parse(localStorage.getItem("users") || "{}");
  const [visible, setvisible] = React.useState<boolean>(false);
  const [form] = Form.useForm();
  const [state, setstate] = React.useState<any>({
    fileList: [],
    previewImage: "",
    previewVisible: false,
    previewTitle: "",
    url: "",
  });
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setstate({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  const handleChange = async ({ fileList }: any) => {
    if (fileList.length >= 1) {
      const url = await getBase64(fileList[0].originFileObj);
      setstate({ ...state, url: url, fileList: fileList });
    }
  };
  const handleCancel = () => setstate({ ...state, previewVisible: false });

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Add Profile Image</div>
    </div>
  );

  const prefixSelector = (
    <Form.Item initialValue={data && data.prefix} name="prefix" noStyle>
      <Select
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
    dispatch(userData(values));
    if (state.url) {
      console.log(state.url);
      localStorage.setItem("userImageUrl", state.url);
    }
    localStorage.setItem("users", JSON.stringify(values));
    setvisible(false);
    message.success("Changes saved successfully!");
  };
  const namePattern = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
  const phoneRegEx =
    /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  return (
    <>
      <Tooltip title="Edit">
        <Button
          shape="circle"
          onClick={() => setvisible(true)}
          icon={<EditOutlined />}
        />
      </Tooltip>
      <Drawer
        title="Edit your account"
        width={520}
        onClose={() => setvisible(false)}
        visible={visible}
      >
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: "+92",
          }}
          scrollToFirstError
        >
          <Form.Item wrapperCol={{ offset: 9 }}>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={state.fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {state.fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              visible={state.previewVisible}
              title={state.previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{ width: "100%" }}
                src={state.previewImage}
              />
            </Modal>
          </Form.Item>
          <Form.Item
            name="name"
            initialValue={data && data.name}
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
            initialValue={data && data.email}
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
            initialValue={data && data.password}
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
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="phone number"
            initialValue={data && data["phone number"]}
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
            initialValue={data && data.gender}
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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
