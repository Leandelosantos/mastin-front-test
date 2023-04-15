import styled from "styled-components";
import { Navbar, Producto } from "./index";

const Title = styled.h1`
  width: 100%;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 90px;
  text-align: center;
  color: #595959;
  margin: 2% 0;
`;

export const Catalogo = () => {
  return (
    <>
      <Navbar />
      <Title>Catalogo</Title>
      <Producto />
    </>
  );
};
