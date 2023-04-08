import React from "react";
import { Table, Tag, Button, Typography, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import useDocumentTitle from "../../common/documentTitle";
import styled from "styled-components";
import Avatar from "antd/lib/avatar/avatar";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const { Title } = Typography;
const StyledButton = styled(Button)``;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function About() {
  useDocumentTitle("About Page");

  const dispatch = useDispatch();

  const userdata: any = useSelector((state: RootState) => state.tableData);

  const array: any[] = userdata.data ? userdata.data.results : [];

  const data = array.map((value: any) => ({
    key: value.cell,
    name: `${value.name.first} ${value.name.last}`,
    age: value.dob.age,
    address: `Street #${value.location.street.number}, ${value.location.street.name}, ${value.location.country}`,
    tags: ["random", "user"],
    img: value.picture.large,
  }));

  const [favorite, setfavorite] = React.useState<string>("");
  const handleFav = (record: any) => {
    const favorites: any = localStorage.getItem("favorites");
    setfavorite(record.name);
    if (favorites) {
      const favArray = JSON.parse(favorites);
      favArray.push(record);
      console.log(favArray);
      localStorage.setItem("favorites", JSON.stringify(favArray));
    } else {
      const array = [record];
      localStorage.setItem("favorites", JSON.stringify(array));
    }
  };

  const columns = [
    {
      title: "Img",
      dataIndex: "img",
      key: "img",
      render: (img: string) => {
        return <Avatar src={<Image src={img} />} alt="img" />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "some",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Button
          icon={favorite === record.name ? <StarFilled /> : <StarOutlined />}
          onClick={() => handleFav(record)}
        >
          {favorite === record.name ? "Added" : "Favorite"}
        </Button>
      ),
    },
  ];

  return (
    <>
      <StyledDiv>
        <Title level={4}>Data Table</Title>
        <StyledButton
          type="primary"
          onClick={() => dispatch({ type: "FETCH_DATA_SAGA" })}
        >
          Get Some Data
        </StyledButton>
      </StyledDiv>
      <Table
        dataSource={data}
        columns={columns}
        loading={userdata.loader}
        pagination={{ pageSize: 4 }}
      />
    </>
  );
}
