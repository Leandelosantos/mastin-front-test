import { memo, useContext } from "react";
import { Producto } from "../index";
import { Title } from "./components";
import { AppContext } from "../../context/AppContext";

const Catalogo = () => {
  const { items } = useContext(AppContext);

  return (
    <>
      <Title>Catalogo</Title>
      {items.map((item) => {
        return (<Producto item={item} />);
      })}
    </>
  );
};

export default memo(Catalogo);
