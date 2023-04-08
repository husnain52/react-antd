import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Hind Guntur', sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2f3067;
  overflow: hidden;
}

.content{
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  animation: bg 1.4s cubic-bezier(0, 0.2, 0.8, 1);
}
@keyframes bg {
  0% {
    background: #000;
  }
  100% {
    background: #fff;
  }
}
h1{
  font-size: 64px;
  transition: 0.5s;
}
.loading {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.loading div {
  position: absolute;
  background: #fff;
  opacity: 1;
  border-radius: 50%;
  animation: loading 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loading div:nth-child(2) {
  animation-delay: -.7s;
}
@keyframes loading {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}


.fa-instagram{
  position: absolute;
  color: #000;
  top: 3%;
  right: 2%;
  font-size: 38px;
}
.fa-instagram:hover{
  font-size: 42px;
  color: #981919;
  transition: all .1s linear;
  cursor: pointer;
}

`;

function Spinner(props: any) {
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setloading(false);
      }, 1500);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <>
          <GlobalStyle />
          <div className="loading">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        props.children
      )}
    </>
  );
}

export default Spinner;
