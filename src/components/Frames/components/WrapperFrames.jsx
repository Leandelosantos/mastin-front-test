import styled from "styled-components";

const WrapperFrames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  width: auto;
  flex-wrap: nowrap;
  padding: 0 4%;
  gap: 30px;

  @media (max-width: 900px) {
    flex-flow: column wrap;
  }
`;

export default WrapperFrames;
