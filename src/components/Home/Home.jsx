import { memo } from "react";
import {
  Slider,
  Frames,
  DescEmpresa,
  FinalHome,
  Header,
} from "../index";

const Home = () => {
  return (
    <>
      <Slider />
      <Header text={'Innovación quimica para poliuretanos e impermeabilizantes'} />
      <Frames />
      <DescEmpresa />
      <FinalHome />
    </>
  );
};

export default memo(Home);
