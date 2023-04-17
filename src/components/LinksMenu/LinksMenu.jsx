import { Link } from "react-router-dom";
import { memo } from "react";
import WrapperLinks from "./components";

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
