import styled from "styled-components";

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  margin-bottom: 2%;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default WrapperGrid;
