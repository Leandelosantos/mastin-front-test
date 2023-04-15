import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column nowrap;
  margin: 10% 0 5% 0;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
`;

export const DataProduct = () => {
  return (
    <>
      <Wrapper>
        <div>
          <h2>DESCRIPCION</h2>
          <p>Catalizador</p>
        </div>
        <div>
          <h2>PRESENTACION</h2>
          <p>Bidon x 20kg</p>
        </div>
        <div>
          <h2>SEGMENTO</h2>
          <p>Industria</p>
        </div>
      </Wrapper>
    </>
  );
};
