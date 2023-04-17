import { memo } from "react";
import { Wrapper } from "./components";

const DataProduct = () => {
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

export default memo(DataProduct);
