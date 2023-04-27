import styled from "styled-components";

const WrapperHistory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: auto;
  flex-flow: column nowrap;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #595959;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;
export default WrapperHistory;
