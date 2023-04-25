import { Link } from "react-router-dom";
import { memo } from "react";
import { WrapperLinks, DropdownLink, Pointer } from "./components";

const LinksMenu = () => {
  return (
    <WrapperLinks>
      <Link to={"/"}>INICIO</Link>
      <Link to={"/empresa"}>EMPRESA</Link>
      <DropdownLink>
        CATALOGO
        <div className="dropdown">
          <Pointer />
          <div className="dropdownContent">
            <div className="dropdownElement">
              <Link to={"/catalogo"}>PRODUCTOS</Link>
            </div>
            <div className="dropdownElement">
              <Link to={"/segmento/filtros"}>FILTROS</Link>
            </div>
            <div className="dropdownElement">
              <Link to={"/segmento/construccion"}>CONSTRUCCIÓN</Link>
            </div>
            <div className="dropdownElement">
              <Link to={"/segmento/industria"}>INDUSTRIA</Link>
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
