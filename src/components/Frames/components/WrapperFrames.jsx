import styled from "styled-components";

const WrapperFrames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  width: auto;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 600px) {
    margin: 5% 4%;
  }
`;

export default WrapperFrames;
