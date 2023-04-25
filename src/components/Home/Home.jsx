import { memo } from "react";
import { Slider, Frames, DescEmpresa, FinalHome, Header } from "../index";
import construccion001 from "../../assets/img/imagenes-mastin/Construccion001.jpg";
import imagen1 from "../../assets/img/imagen1.png";
import filtros001 from "../../assets/img/imagenes-mastin/Filtros001.jpg";
import industria001 from "../../assets/img/imagenes-mastin/Industria001.jpg";

const imgHome = [imagen1, construccion001, filtros001, industria001];

const Home = () => {
  return (
    <>
      <Slider imagenes={imgHome} />
      <Header
        text={"Innovación quimica para poliuretanos e impermeabilizantes"}
      />
      <Frames />
      <DescEmpresa />
      <FinalHome />
    </>
  );
};

export default memo(Home);
