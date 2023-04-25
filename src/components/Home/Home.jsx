import { memo } from "react";
import {
  Slider,
  Frames,
  DescEmpresa,
  FinalHome,
  Header,
} from "../index";
import construccion001 from '../../assets/img/imagenes-mastin/Construccion001.jpg';

const Home = () => {
  return (
    <>
      <Slider imagenes={[construccion001]} />
      <Header text={'Innovación quimica para poliuretanos e impermeabilizantes'} />
      <Frames />
      <DescEmpresa />
      <FinalHome />
    </>
  );
};

export default memo(Home);
