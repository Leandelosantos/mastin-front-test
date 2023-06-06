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
              <Link to={"/catalogo"}>{text.navbar.catalogo.item}</Link>
            </div>
            <div className="dropdownElement">
              <Link to={text.navbar.segmentos.filtros}>
                {text.navbar.catalogo.item1}
              </Link>
            </div>
            <div className="dropdownElement">
              <Link to={text.navbar.segmentos.construccion}>
                {text.navbar.catalogo.item2}
              </Link>
            </div>
            <div className="dropdownElement">
              <Link to={text.navbar.segmentos.consumer}>
                {text.navbar.catalogo.item3}
              </Link>
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
      <Link to={"/login"}>Login</Link>
    </WrapperLinks>
  );
};

export default memo(LinksMenu);
