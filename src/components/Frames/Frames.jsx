import { Imagen } from "../index";
import { Link } from "react-router-dom";
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
            src={text.frames.filtrosIndustria}
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
