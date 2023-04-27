import styled from "styled-components";

const HeaderComponent = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 5% auto;
  font-style: normal;
  font-weight: 300;
  font-family: "Roboto Condensed";
  font-size: 72px;
  line-height: 90px;
  text-align: center;
  color: #77cae7;
  flex-wrap: wrap;

  @media (max-width: 1280px) {
    width: auto;
  }

  @media (max-width: 600px) {
    font-size: 60px;
    line-height: 80px;
  }
  @media (max-width: 480px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export default HeaderComponent;
