import { Button, Typography } from "antd";
import styled from "styled-components";

const StyledLink = styled.a`
  float: right;
`;

const StyledButton = styled(Button)`
  width: -webkit-fill-available;
`;

const HeroSection = styled.div`
  background: #2f3067;
  height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const StyledHeroImage = styled.img`
  height: 40%;
`;

const StyledTitle = styled(Typography.Title)`
  && {
    font-size: 19px;
    color: #fff;
    text-align: center;
  }
`;

const FormSection = styled.div`
  height: 100vh;
  padding: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export {
  StyledLink,
  StyledButton,
  HeroSection,
  StyledHeroImage,
  StyledTitle,
  FormSection,
};
