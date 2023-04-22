import logo from "../../assets/img/logo-mas-tin.png";
import { Imagen, LinksMenu } from "../index";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { WrapperNav, MenuContainer, LogoContainer } from "./components";

const Navbar = () => {
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
            <Hamburger />
          </div>
        </WrapperNav>
    //   </nav>
    // </header>
  );
};

export default memo(Navbar);
