import { Slider, Politicas, Imagen } from "../index";
import Collapse from "react-bootstrap/esm/Collapse";
import plusIcon from "../../assets/img/plus-icon-red.png";
import minusIcon from "../../assets/img/minus-icon-lightblue.png";
import { memo, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import {
  WrapperHistory,
  Wrapper,
  WrapperButton,
  HeaderEmpresa,
} from "./components";
import slide1 from "../../assets/img/imagenes-mastin/construccion-empresa.png";
import slide2 from "../../assets/img/imagenes-mastin/Construccion003.jpg";
import slide3 from "../../assets/img/imagenes-mastin/Filtros003.jpg";
import slide4 from "../../assets/img/imagenes-mastin/CONSUMER-CONFORT-005.jpg";
import slide5 from "../../assets/img/imagenes-mastin/Industria002.jpg";
import slide6 from "../../assets/img/imagenes-mastin/CONSUMER-CONFORT-004.jpg";

import presidenteImg from "../../assets/img/susana.png";

const imgEmpresa = [slide1, slide2, slide3, slide4, slide5, slide6];

const Empresa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { text } = useContext(AppContext);

  return (
    <>
      <Slider imagenes={imgEmpresa} />
      <HeaderEmpresa text={text.empresa.h1} />
      <WrapperHistory id="collapse-text">
        <p>{text.empresa.p1}</p>
        <Collapse in={isOpen}>
          <p>{text.empresa.p2}</p>
        </Collapse>
        <WrapperButton
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="collapse-text"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <Imagen src={minusIcon} alt="icon" />
          ) : (
            <Imagen src={plusIcon} alt="icon" />
          )}
        </WrapperButton>
      </WrapperHistory>

      <Wrapper>
        <div className="circle-red">
          <Imagen
            src={presidenteImg}
            alt={"Presidente"}
            width={"100%"}
          ></Imagen>
        </div>
        <div className="president">
          <p>Susana Argüello de Maio</p>
          <p>Presidente</p>
        </div>
      </Wrapper>
      <Politicas />
    </>
  );
};

export default memo(Empresa);
