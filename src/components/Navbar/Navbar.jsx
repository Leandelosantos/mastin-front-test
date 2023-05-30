import logo from "../../assets/img/logo-mas-tin.png";
import { Imagen, LinksMenu } from "../index";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { memo, useState, useContext, useEffect } from "react";
import {
  WrapperNav,
  MenuContainer,
  LogoContainer,
  LinksMobile,
  CategoriesLinks,
} from "./components";
import { AppContext } from "../../context/AppContext";
import wordings from "../../wordings";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const { setLanguage, text, language } = useContext(AppContext);

  return (
    // <header>
    //   <nav>
    <WrapperNav>
      <LogoContainer>
        <Link to={"/"}>
          <Imagen src={logo} alt="logo mas-tin" width="148px" />
        </Link>
      </LogoContainer>

      <MenuContainer>
        <LinksMenu />
      </MenuContainer>

      <div className="burguer">
        <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
          <div className="sideBar">
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
            <LinksMobile>
              <Link to={"/"} onClick={() => setOpen(!isOpen)}>
                {text.navbar.inicio}
              </Link>
              <Link to={"/empresa"} onClick={() => setOpen(!isOpen)}>
                EMPRESA
              </Link>
              <span>CATALOGO</span>
              <CategoriesLinks>
                <Link to={"/catalogo"} onClick={() => setOpen(!isOpen)}>
                  PRODUCTOS
                </Link>
                <Link to={"/segmento/filtros"} onClick={() => setOpen(!isOpen)}>
                  FILTROS
                </Link>
                <Link
                  to={"/segmento/construccion"}
                  onClick={() => setOpen(!isOpen)}
                >
                  CONSTRUCCIÓN
                </Link>
                <Link
                  to={"/segmento/industria"}
                  onClick={() => setOpen(!isOpen)}
                >
                  INDUSTRIA
                </Link>
              </CategoriesLinks>
              <Link to={"/contacto"} onClick={() => setOpen(!isOpen)}>
                {text.navbar.contacto}
              </Link>
              <span
                onClick={
                  language === "ESP" ? () => {} : () => setLanguage("ESP")
                }
              >
                ESP
              </span>
              {/* <span>|</span> */}
              <span
                onClick={
                  language === "POR" ? () => {} : () => setLanguage("POR")
                }
              >
                POR
              </span>
            </LinksMobile>
          </div>
        )}
      </div>
    </WrapperNav>
    //   </nav>
    // </header>
  );
};

export default memo(Navbar);
