import logo from "../../assets/img/logo-mas-tin.png";
import { Imagen, LinksMenu } from "../index";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { memo, useState } from "react";
import {
  WrapperNav,
  MenuContainer,
  LogoContainer,
  MobileLinks,
  CategoriesLinks,
} from "./components";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

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
            <MobileLinks>
              <Link to={"/"}>INICIO</Link>
              <Link to={"/empresa"}>EMPRESA</Link>
              <span>CATALOGO</span>
              <CategoriesLinks>
                <Link to={"/catalogo"}>PRODUCTOS</Link>
                <Link to={"/segmento/filtros"}>FILTROS</Link>
                <Link to={"/segmento/construccion"}>CONSTRUCCIÓN</Link>
                <Link to={"/segmento/industria"}>INDUSTRIA</Link>
              </CategoriesLinks>
              <Link to={"/contacto"}>CONTACTO</Link>
              <li>ESP | POR</li>
            </MobileLinks>
          </div>
        )}
      </div>
    </WrapperNav>
    //   </nav>
    // </header>
  );
};

export default memo(Navbar);
