import { Imagen } from "../index";
import { Link } from "react-router-dom";
import filtros from "../../assets/img/filtros-industria.jpg";
import construccion from "../../assets/img/construccion.jpeg";
import consumer from "../../assets/img/consumer.jpeg";
import { memo, useContext } from "react";
import { WrapperFrames } from "./components";
import { AppContext } from "../../context/AppContext";

const Frames = () => {
  const { text } = useContext(AppContext);

  return (
    <>
      <WrapperFrames>
        <Link to={text.navbar.segmentos.filtros}>
          <p>{text.navbar.catalogo.item1}</p>
          <Imagen src={filtros} alt="filtros-industria" width={"100%"} />
        </Link>
        <Link to={text.navbar.segmentos.construccion}>
          <p>{text.navbar.catalogo.item2}</p>
          <Imagen src={construccion} alt="construccion" width={"100%"} />
        </Link>
        <Link to={text.navbar.segmentos.consumer}>
          <p>{text.navbar.catalogo.item3}</p>
          <Imagen src={consumer} alt="consumer confort" width={"100%"} />
        </Link>
      </WrapperFrames>
    </>
  );
};

export default memo(Frames);
