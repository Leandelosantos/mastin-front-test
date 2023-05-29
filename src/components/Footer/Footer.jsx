import { Imagen } from "../index";
import logo from "../../assets/img/logo-mas-tin.png";
import { Link } from "react-router-dom";
import { memo, useContext } from "react";
import { WrapperFooter, WrapperLinksFooter } from "./components";
import { AppContext } from "../../context/AppContext";

const Footer = () => {
  const { text } = useContext(AppContext);

  return (
    <>
      <WrapperFooter>
        <div className="footerTop">
          <Link to={"/"}>
            <Imagen src={logo} alt="logo mas-tin" width={130} />
          </Link>
          <p>{text.footer}</p>
          <div className="footerBottom">
            <p>Argentina</p>
            <p>+54 9 (11)2120-1700</p>
            <p>Brasil</p>
            <p>+55 (11)2481-2900</p>
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
