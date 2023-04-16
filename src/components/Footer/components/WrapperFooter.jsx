import styled from "styled-components";

const WrapperFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5%;
  margin-top: 1%;

  .footerTop {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column nowrap;
    width: auto;
  }
  .footerTop p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
  }

  .footerBottom {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-flow: column nowrap;
    width: 100%;
    margin: 10% auto;
  }
  .footerBottom p {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    color: #000000;
  }
`;

export default WrapperFooter;
