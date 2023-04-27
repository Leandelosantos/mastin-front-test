import styled from "styled-components";

const WrapperPolitics = styled.div`
  display: flex;
  height: auto;
  padding: 2% 0;
  width: auto;
  margin: auto;
  background-color: #77cae7;
  gap: 5%;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #bdbebe;
  .column1 {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-flow: column nowrap;
    gap: 7%;
    margin: 0 0 0 10%;
  }
  .column1 h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
  .column1 p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .column2 {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-flow: column nowrap;
    gap: 7%;
    margin: 0 10% 0 0;
  }
  .column2 p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 600px) {
    flex-flow: column wrap;

    .column1 {
      margin: 0 10%;
    }
    .column2 {
      margin: 0 10%;
    }
  }
`;

export default WrapperPolitics;
