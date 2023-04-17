import { Imagen } from "../index";
import logo from "../../assets/img/logo-mas-tin.png";
import { Link } from "react-router-dom";
import { memo } from "react";
import { WrapperFooter, WrapperLinksFooter } from "./components";

const Footer = () => {
  return (
    <>
      <WrapperFooter>
        <div className="footerTop">
          <Link to={"/"}>
            <Imagen src={logo} alt="logo mas-tin" width={130} />
          </Link>
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

export default memo(Footer);
