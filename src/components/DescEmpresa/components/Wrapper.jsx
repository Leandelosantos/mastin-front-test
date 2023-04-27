import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin: auto;
  width: auto;
  height: auto;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(189, 191, 191, 0.22) 0,
    rgba(189, 191, 191, 0.22) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 10px 10px;
  background-color: #f6f6f6;
  h2 {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    margin: 3% auto 0 auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #d12e1d;
  }
  .secContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    gap: 10%;
  }
  .secContainer ul {
    display: flex;
    width: auto;
    flex-flow: column wrap;
    margin-top: 5%;
  }
  .secContainer ul li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #595959;
  }

  @media (max-width: 800px) {
    h2 {
      width: auto;
      font-size: 40px;
      margin: 6% auto;
      line-height: 43px;
    }

    .secContainer {
      flex-flow: column wrap;
      width: auto;
      gap: 30px;
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 30px;
      line-height: 35px;
    }
    .secContainer img {
      width: 70%;
    }
    .secContainer ul li {
      font-size: 20px;
    }
  }
  @media (max-width: 480px) {
    .secContainer ul li {
      font-size: 18px;
    }
  }
`;

export default Wrapper;
