import styled from "styled-components";

const WrapperProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #595959;
  width: 444px;
  min-height: 114px;
  max-height: fit-content;
  border-bottom: 2px solid #d12e1d;
  margin: 0 1%;
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 160px;
    width: 444px;
  }
  .collapse-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: auto;
    margin: 0 0 0 2%;
  }
`;

export default WrapperProduct;
