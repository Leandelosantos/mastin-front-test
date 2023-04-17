import { memo, useContext } from "react";
import { Producto } from "../index";
import { Title, WrapperGrid } from "./components";
import { AppContext } from "../../context/AppContext";

const Catalogo = () => {
  const { items } = useContext(AppContext);

  return (
    <>
      <Title>Catalogo</Title>
      <WrapperGrid>
        {items.map((item) => {
          return <Producto item={item} />;
        })}
      </WrapperGrid>
    </>
  );
};

export default memo(Catalogo);
