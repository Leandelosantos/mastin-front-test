import { Link } from "react-router-dom";
import { memo } from "react";
import { WrapperLinks, DropdownLink, Pointer } from "./components";

const LinksMenu = () => {
  return (
    <WrapperLinks>
      <Link to={"/"}>INICIO</Link>
      <Link to={"/empresa"}>EMPRESA</Link>
      <DropdownLink to={"/catalogo"}>
        CATALOGO
        <div className="dropdown">
          <Pointer />
          <div className="dropdownContent">
            <div className="dropdownElement">
              <Link to={"/catalogo"}>PRODUCTOS</Link>
            </div>
            <div className="dropdownElement">
              <Link to={"/catalogo"}>FILTROS</Link>
            </div>
            <div className="dropdownElement">
              <Link to={"/catalogo"}>CONSTRUCCIÓN</Link>
            </div>
            <div className="dropdownElement">
              <Link to={"/catalogo"}>INDUSTRIA</Link>
            </div>
          </div>
        </div>
      </DropdownLink>
      <Link to={"/contacto"}>CONTACTO</Link>
      <li>ESP | POR</li>
    </WrapperLinks>
  );
};

export default memo(LinksMenu);
