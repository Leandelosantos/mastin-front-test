import logo from "../../assets/img/logo-mas-tin.png";
import { Imagen, LinksMenu } from "../index";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { memo, useState, useContext } from "react";
import {
  WrapperNav,
  MenuContainer,
  LogoContainer,
  LinksMobile,
  CategoriesLinks,
} from "./components";
import { AppContext } from "../../context/AppContext";

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
                  {text.navbar.catalogo.item}
                </Link>
                <Link
                  to={text.navbar.segmentos.filtros}
                  onClick={() => setOpen(!isOpen)}
                >
                  {text.navbar.catalogo.item1}
                </Link>
                <Link
                  to={text.navbar.segmentos.construccion}
                  onClick={() => setOpen(!isOpen)}
                >
                  {text.navbar.catalogo.item2}
                </Link>
                <Link
                  to={text.navbar.segmentos.consumer}
                  onClick={() => setOpen(!isOpen)}
                >
                  {text.navbar.catalogo.item3}
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
              <span
                onClick={
                  language === "POR" ? () => {} : () => setLanguage("POR")
                }
              >
                POR
              </span>
              <Link to={"/login"}>Login</Link>
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
