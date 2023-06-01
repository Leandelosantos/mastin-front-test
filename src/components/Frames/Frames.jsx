import { Imagen } from "../index";
import { Link } from "react-router-dom";
import filtros from "../../assets/img/Home-IndustriaFiltros.jpg";
import filtrosPort from "../../assets/img/HomePort-IndustriaFiltrosjpg.jpg";
import { memo, useContext } from "react";
import { WrapperFrames } from "./components";
import { AppContext } from "../../context/AppContext";

const Frames = () => {
  const { text } = useContext(AppContext);

  return (
    <>
      <WrapperFrames>
        <Link to={"segmento/filtros-industria"}>
          <Imagen
            src={text === "ESP" ? filtros : filtrosPort}
            alt="filtros"
            width={"100%"}
          />
        </Link>
        <Link to={"segmento/construccion"}>
          <Imagen
            src={text.frames.construccion}
            alt="construccion"
            width={"100%"}
          />
        </Link>
        <Link to={"segmento/consumer-confort"}>
          <Imagen src={text.frames.consumer} alt="industria" width={"100%"} />
        </Link>
      </WrapperFrames>
    </>
  );
};

export default memo(Frames);
