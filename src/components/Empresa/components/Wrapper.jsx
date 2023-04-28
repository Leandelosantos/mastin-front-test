import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin: auto;
  width: 100%;
  height: auto;
  padding: 2% 0;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(189, 191, 191, 0.22) 0,
    rgba(189, 191, 191, 0.22) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 10px 10px;
  background-color: #f6f6f6;
  .circle-red {
    background-color: #fff;
    width: 215px;
    height: 215px;
    border-radius: 50%;
    border: 1px solid #d12e1d;
  }
  .president {
    text-align: center;
    margin-top: 1%;
  }
  .president p:nth-child(1) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  .president p:nth-child(2) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #595959;
  }
`;

export default Wrapper;
