import styled from "styled-components";

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  padding: 2% 4%;
  width: 100%;
  margin: auto;
  box-shadow: rgb(189, 190, 190) 0px 4px 6px -2px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default WrapperGrid;
