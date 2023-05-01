import { memo, useContext } from "react";
import { Producto } from "../index";
import { Title, WrapperGrid } from "./components";
import { AppContext } from "../../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const Catalogo = () => {
  const { items } = useContext(AppContext);

  return (
    <>
      <Title>Catalogo</Title>
      <WrapperGrid>
        {items.map((item) => {
          return <Producto item={item} key={uuidv4()} />;
        })}
      </WrapperGrid>
    </>
  );
};

export default memo(Catalogo);
