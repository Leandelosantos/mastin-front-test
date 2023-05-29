import { memo, useContext } from "react";
import { Slider, Frames, DescEmpresa, FinalHome, Header } from "../index";
import construccion001 from "../../assets/img/imagenes-mastin/Construccion007.jpg";
import frame31 from "../../assets/img/frame31.png";
import consume002 from "../../assets/img/imagenes-mastin/CONSUMER-CONFORT-002.jpg";
import consume003 from "../../assets/img/imagenes-mastin/CONSUMER-CONFORT-003.jpg";
import industria001 from "../../assets/img/imagenes-mastin/Industria003.jpg";
import { AppContext } from "../../context/AppContext";

const imgHome = [
  frame31,
  consume002,
  construccion001,
  consume003,
  industria001,
];

const Home = () => {
  const { text } = useContext(AppContext);

  return (
    <>
      <Slider imagenes={imgHome} />
      <Header text={text.header.h1} />
      <Frames />
      <DescEmpresa />
      <FinalHome />
    </>
  );
};

export default memo(Home);
