import { Link } from "react-router-dom";
import styled from "styled-components";
import { memo } from "react";
import { Dropdown } from "./components";

export const WrapperLinks = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #595959;
  }
  a:hover {
    font-weight: 600;
  }
  li {
    color: #595959;
  }
`;

const LinksMenu = () => {
  return (
    <>
      <WrapperLinks>
        <Link to={"/"}>INICIO</Link>
        <Link to={"/empresa"}>EMPRESA</Link>
        <Link to={"/catalogo"}>CATALOGO</Link>
        <Link to={"/contacto"}>CONTACTO</Link>
        <li>ESP | POR</li>
      </WrapperLinks>
    </>
  );
};

export default memo(LinksMenu);
