import styled from "styled-components";
import {
  Navbar,
  Slider,
  Frames,
  DescEmpresa,
  FinalHome,
  Footer,
} from "./index";

export const Header2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 5% auto;
  font-style: normal;
  font-weight: 300;
  font-family: "Roboto Condensed";
  font-size: 72px;
  line-height: 90px;
  text-align: center;
  color: #77cae7;
`;

export const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Header2>
        Innovación quimica para poliuretanos e impermeabilizantes
      </Header2>
      <Frames />
      <DescEmpresa />
      <FinalHome />
      <Footer />
    </>
  );
};
