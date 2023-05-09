import { memo } from "react";
import { Slider, Frames, DescEmpresa, FinalHome, Header } from "../index";
import construccion001 from "../../assets/img/imagenes-mastin/Construccion007.jpg";
import frame31 from "../../assets/img/frame31.png";
import filtros001 from "../../assets/img/imagenes-mastin/Filtros001.jpg";
import industria001 from "../../assets/img/imagenes-mastin/Industria003.jpg";

const imgHome = [frame31, construccion001, industria001];

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
