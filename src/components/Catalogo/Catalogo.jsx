import { memo } from "react";
import { Producto } from "../index";
import { Title } from "./components";

const Catalogo = () => {
  return (
    <>
      <Title>Catalogo</Title>
      <Producto />
    </>
  );
};

export default memo(Catalogo);
