import styled from "styled-components";

const WrapperFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 4%;
  margin: 1% 0 0.5% 0;
  flex-wrap: wrap;

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
    margin-bottom: 6px;
  }

  .footerBottom {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-flow: column nowrap;
    width: 100%;
    margin: auto;
  }
  .footerBottom p {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    color: #000000;
    margin: 0;
  }
`;

export default WrapperFooter;
