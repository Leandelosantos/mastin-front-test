import styled from "styled-components";

const WrapperCollapse = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 444px;
  height: auto;
  margin: 0 0 0 1%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default WrapperCollapse;
