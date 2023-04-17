import { memo } from "react";
import { Wrapper } from "./components";

const DataProduct = ({ item }) => {
  return (
    <>
      <Wrapper>
        <div>
          <h2>DESCRIPCION</h2>
          <p>{item.DESCRIPCION}</p>
        </div>
        <div>
          <h2>PRESENTACION</h2>
          <p>{item.PRESENTACI_N}</p>
        </div>
        <div>
          <h2>SEGMENTO</h2>
          <p>{item.SEGMENTO}</p>
        </div>
      </Wrapper>
    </>
  );
};

export default memo(DataProduct);
