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
} from "./components/index";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
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
              <Link to={"/"} onClick={() => setOpen(!isOpen)}>
                INICIO
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
                CONTACTO
              </Link>
              <li>ESP | POR</li>
            </MobileLinks>
          </div>
        )}
      </div>
    </WrapperNav>
  );
};

export default memo(Navbar);
