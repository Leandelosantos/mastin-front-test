import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: auto;
  padding: 5% 0;
  box-shadow: 0px 0px 6px 1px #bdbebe;
  filter: drop-shadow(0px 4px 4px #bdbebe);

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin-bottom: 1%;
  }
  .text h2 {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 300;
    font-size: 72px;
    line-height: 90px;
    text-align: center;
    color: #595959;
  }
  .text p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
  .brands {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    .text h2 {
      font-size: 60px;
    }
    .text p {
      font-size: 20px;
      width: 80%;
    }
  }

  @media (max-width: 600px) {
    .text h2 {
      font-size: 45px;
    }
  }
`;

export default Wrapper;
