import styled from "styled-components";

const MenuContainer = styled.div`
  width: 40%;
  justify-content: space-between;
  list-style-type: none;
  margin-right: 5%;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export default MenuContainer;
