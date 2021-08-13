import React from "react";
import { Button, Layout, Menu, PageHeader, Typography } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
  StarOutlined
} from "@ant-design/icons";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Header, Sider, Content } = Layout;

const StyledButton = styled(Button)`
  float: right;
  margin: 15px;
`;

export default function Sidebar(props:any) {
  const [state, setstate] = React.useState({
    collapsed: false,
  });
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
  }
  const toggle = () => {
    setstate({
      collapsed: !state.collapsed,
    });
  };
  const pathName = window.location.pathname;
  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={state.collapsed}>
        {/* <img src="" alt="logo" className="logo" /> */}
        <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className="logo"></img>
        <Menu theme="light" mode="inline" defaultSelectedKeys={[pathName]}>
          <Menu.Item key="/" icon={<UserOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/users" icon={<VideoCameraOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="/favorites" icon={<StarOutlined />}>
            <Link to="/favorites">Favorite Users</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <Link to="/login"><StyledButton icon={<LogoutOutlined />} onClick={handleLogout}>Logout</StyledButton></Link>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
