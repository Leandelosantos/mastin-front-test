import styled from "styled-components";
import { Imagen } from "./Imagen";
import logo from "../assets/img/logo-mas-tin.png";
import { WrapperLinks } from "./LinksMenu";
import { Link } from "react-router-dom";

const WrapperFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5%;
  margin-top: 1%;

  .footerTop {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column nowrap;
    width: auto;
  }
  .footerTop p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
  }

  .footerBottom {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-flow: column nowrap;
    width: 100%;
    margin: 10% auto;
  }
  .footerBottom p {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    color: #000000;
  }
`;

const WrapperLinksFooter = styled(WrapperLinks)`
  font-family: "Inter";
  gap: 10%;
  a:hover {
    font-weight: 600;
  }
`;

export const Footer = () => {
  return (
    <>
      <WrapperFooter>
        <div className="footerTop">
          <Imagen src={logo} alt="logo mas-tin" width={130} />
          <p>Un mundo de soluciones</p>
          <div className="footerBottom">
            <p>Teléfono</p>
            <p>+54 9 (11)2120-1700</p>
          </div>
        </div>
        <WrapperLinksFooter>
          <Link to={"/"}>INICIO</Link>
          <Link to={"/empresa"}>EMPRESA</Link>
          <Link to={"/catalogo"}>CATALOGO</Link>
          <Link to={"/contacto"}>CONTACTO</Link>
        </WrapperLinksFooter>
      </WrapperFooter>
    </>
  );
};
