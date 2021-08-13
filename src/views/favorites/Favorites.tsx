import React from "react";
import {
  Table,
  Typography,
  Tag,
  Space,
  Button,
  Avatar,
  Image,
  Divider,
  Input,
} from "antd";




export default function Favorites() {
  const getFavorites: any = localStorage.getItem("favorites");
  const favArray:any = JSON.parse(getFavorites);
  const [data, setdata] = React.useState<any>([]);
  const [loading, setloading] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (favArray) {
      setdata(favArray);
      setloading(false)
    }
  }, [getFavorites]);

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
        <Space size="small" split={<Divider type="vertical" />}>
          <Button onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
      ),
    },
  ];
  const handleDelete = (record: any) => {
    setloading(true)
    const getFavorites:any = localStorage.getItem("favorites");
    var favArray:[] = JSON.parse(getFavorites);
    const idx = favArray.findIndex((x: any) => x.key === record.key);
    if (idx > -1) {
      favArray.splice(idx, 1)
      console.log(favArray)
      localStorage.setItem("favorites", JSON.stringify(favArray));
    }
  };
  return (
    <>
      <Typography.Title level={4}>Favorite Users</Typography.Title>
      <Table loading={loading} columns={columns} dataSource={data} pagination={{ pageSize: 4 }} />
    </>
  );
}
