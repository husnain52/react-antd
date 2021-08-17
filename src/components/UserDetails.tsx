import React from "react";
import {Menu, Avatar, Dropdown, Button, Typography, Descriptions, Space, Divider, Tooltip} from 'antd';
import { LogoutOutlined,EditOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledAvatar = styled(Avatar)`
    float: right;
    margin: 12px 25px;
    cursor: pointer;
`;
const Flexbox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 30px;
align-items: center;
box-shadow: 0px 0px 11px -4px rgba(0,0,0,0.75);
background-color: #fff;
border-radius: 10px;
min-width: 250px;
min-height: 300px;
`;
const StyledDiv = styled.div`
text-align:center;`

const StyledSpace = styled(Space)`margin-top:30px;`

export default function UserDetails() {
    const history = useHistory();
    const data:any = JSON.parse(localStorage.getItem('users') || '{}');
    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        history.push('/login')
    }
    const menu = (
        <Flexbox>
           <Avatar size={64} icon={<UserOutlined />} />
           <StyledDiv>
            <Typography.Title level={5}>{data && data.name}</Typography.Title>
           <Typography>{data && data.email}</Typography>
           <Typography>{data && `${data.prefix} ${data["phone number"]}`}</Typography>
           </StyledDiv>
           <Space direction="horizontal" split={<Divider type="vertical" />}>
                <Tooltip title="Edit"><Button shape="circle" icon={<EditOutlined />} /></Tooltip>
                <Tooltip title="Logout"><Button onClick={handleLogout} shape="circle" icon={<LogoutOutlined />} /></Tooltip>
           </Space>
        </Flexbox>
      );
  return (
      <Dropdown overlay={menu} trigger={['click']}>
          <Tooltip title={data && data.name}><StyledAvatar size="large" icon={<UserOutlined />} /></Tooltip>
      </Dropdown>
  );
}
