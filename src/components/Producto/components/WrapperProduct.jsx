import styled from "styled-components";

const WrapperProduct = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: column nowrap;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #595959;
  width: 100%;
  padding-top: 5%;
  min-height: 90px;
  max-height: fit-content;
  border-bottom: 2px solid #d12e1d;
  margin: 0 1%;
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //gap: 160px;
    width: 100%;

    p {
      margin-bottom: 0;
    }
  }
  .collapse-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 1% 0 0 2%;
  }

  @media (max-width: 900px) {
    width: 100%;
    .product {
      width: 100%;
    }
  }
`;

export default WrapperProduct;
