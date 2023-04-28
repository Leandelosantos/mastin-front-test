import styled from "styled-components";

const WrapperContact = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgb(189, 190, 190) 0px 2px 6px 0px;
  .country {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: start;
    flex-flow: column nowrap;
    margin: 2% 0 0 2%;
  }
  .country h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    color: #77cae7;
  }
  .country p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  .country p:nth-child(5),
  .country p:nth-child(6) {
    font-weight: 600;
  }
  .country iframe {
    border: 0;
    margin: 2% 0;
  }

  @media (max-width: 1600px) {
    .country iframe {
      width: 600px;
      height: 400px;
    }
  }
  @media (max-width: 1200px) {
    .country iframe {
      width: 400px;
      height: 400px;
    }
  }
  @media (max-width: 800px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 4%;

    .country {
      width: auto;
      margin: 3%;
    }
    .country iframe {
      width: 600px;
      height: 600px;
    }
  }
  @media (max-width: 600px) {
    .country {
      width: 100%;
    }
    .country iframe {
      width: 460px;
      height: 460px;
    }
  }

  @media (max-width: 480px) {
    .country iframe {
      width: 380px;
      height: 400px;
    }
  }
`;

export default WrapperContact;
