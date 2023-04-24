import { memo } from "react";
import { Slider, Header } from "../index";
import {
  construccion001,
  construccion002,
  construccion003,
  construccion004,
  construccion005,
  construccion006,
  construccion007,
  construccion008,
  filtros001,
  filtros002,
  filtros003,
  filtros005,
  industria001,
  industria002,
  industria003,
  industria004,
} from "../../assets/img/imagenes-mastin/index";

const Segmento = () => {
  const path = window.location.pathname;

  const construccionImg = [
    construccion001,
    construccion002,
    construccion003,
    construccion004,
    construccion005,
    construccion006,
    construccion007,
    construccion008,
  ];

  const filtrosImg = [filtros001, filtros002, filtros003, filtros005];

  const industriaImg = [industria001, industria002, industria003, industria004];

  const mapImg = (arrImg) => {
    arrImg.map((img) => {
      return img;
    });
  };

  return (
    <>
      <Slider
        imagenes={
          (path === "/filtros" &&
            filtrosImg.map((img) => {
              return img;
            })) ||
          (path === "/construccion" && construccionImg) ||
          (path === "/industria" && industriaImg)
        }
      />
      <Header
        text={
          (path === "/filtros" && "Amplia gama de insumos para filtros") ||
          (path === "/construccion" &&
            "Materiales de alta calidad para el área de la construcción") ||
          (path === "/industria" &&
            "Ofrecemos soluciones en PU a la medida de su industria")
        }
      />
    </>
  );
};

export default memo(Segmento);
