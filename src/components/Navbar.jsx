import styled from "styled-components";
import logo from "../assets/img/logo-mas-tin.png";
import { Imagen, LinksMenu } from "./index";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const WrapperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  box-shadow: 0px 2px 10px 1px #bebdbd;
  height: 66px;
  .burguer {
    @media (min-width: 376px) {
      display: none;
    }
  }
`;

const MenuContainer = styled.div`
  width: 40%;
  justify-content: space-between;
  list-style-type: none;
  margin-right: 5%;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
`;

const LogoContainer = styled.div`
  width: 60%;
  margin-left: 10%;
`;

export const Navbar = () => {
  return (
    <>
      <header>
        <nav>
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
        </nav>
      </header>
    </>
  );
};
