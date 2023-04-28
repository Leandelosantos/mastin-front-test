import { Imagen } from "../index";
import frame21 from "../../assets/img/frame21.png";
import frame22 from "../../assets/img/frame22.png";
import frame23 from "../../assets/img/frame23.png";
import { Link } from "react-router-dom";
import { memo } from "react";
import { WrapperFrames } from "./components";

const Frames = () => {
  return (
    <>
      <WrapperFrames>
        <Link to={"segmento/filtros"}>
          <Imagen src={frame21} alt="filtros" width={"100%"} />
        </Link>
        <Link to={"segmento/construccion"}>
          <Imagen src={frame22} alt="construccion" width={"100%"} />
        </Link>
        <Link to={"segmento/industria"}>
          <Imagen src={frame23} alt="industria" width={"100%"} />
        </Link>
      </WrapperFrames>
    </>
  );
};

export default memo(Frames);
