import React from "react";
import { Button, Layout, Menu, Typography } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import Spinner from "./Spinner/Spinner";

const { Header, Sider, Content } = Layout;

export default function Sidebar(props: any) {
  const [state, setstate] = React.useState({
    collapsed: false,
  });
  const toggle = () => {
    setstate({
      collapsed: !state.collapsed,
    });
  };
  const pathName = window.location.pathname;
  return (
    <Spinner>
      <Layout>
        <Sider
          theme="dark"
          trigger={null}
          collapsible
          collapsed={state.collapsed}
        >
          {state.collapsed ? (
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              className="logo"
            ></img>
          ) : (
            <Typography.Title
              className="logo"
              style={{ color: "white", height: "35px" }}
            >
              LOGO
            </Typography.Title>
          )}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathName]}>
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
            <UserDetails />
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
    </Spinner>
  );
}
