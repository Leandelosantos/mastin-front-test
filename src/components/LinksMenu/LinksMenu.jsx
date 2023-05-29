import { Link } from "react-router-dom";
import { memo, useContext } from "react";
import { WrapperLinks, DropdownLink, Pointer } from "./components";
import { AppContext } from "../../context/AppContext";

const LinksMenu = () => {
  const { setLanguage, text, language } = useContext(AppContext);

  return (
    <WrapperLinks>
      <Link to={"/"}>{text.navbar.inicio}</Link>
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
      <Link to={"/contacto"}>{text.navbar.contacto}</Link>
      <span onClick={language === "ESP" ? () => {} : () => setLanguage("ESP")}>
        ESP
      </span>
      <span>|</span>
      <span onClick={language === "POR" ? () => {} : () => setLanguage("POR")}>
        POR
      </span>
    </WrapperLinks>
  );
};

export default memo(LinksMenu);
