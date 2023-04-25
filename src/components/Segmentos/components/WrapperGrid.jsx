import styled from "styled-components";

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  margin-bottom: 2%;
`;

export default WrapperGrid;
