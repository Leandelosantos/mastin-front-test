import { Slider, Politicas, Imagen } from "../index";
import Collapse from "react-bootstrap/esm/Collapse";
import plusIcon from "../../assets/img/plus-icon-red.png";
import minusIcon from "../../assets/img/minus-icon-lightblue.png";
import { memo, useState } from "react";
import {
  WrapperHistory,
  Wrapper,
  WrapperButton,
  HeaderEmpresa,
} from "./components";
import slide1 from "../../assets/img/imagenes-mastin/construccion-empresa.png";
import slide2 from "../../assets/img/imagenes-mastin/Construccion003.jpg";
import slide3 from "../../assets/img/imagenes-mastin/Filtros003.jpg";
import slide4 from "../../assets/img/imagenes-mastin/Industria002.jpg";

const imgEmpresa = [slide1, slide2, slide3, slide4];

const Empresa = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Slider imagenes={imgEmpresa} />
      <HeaderEmpresa
        text={
          "Contamos con el mejor equipo de profesionales para atender todas sus consultas"
        }
      />
      <WrapperHistory id="collapse-text">
        <p>
          Registrada en Julio de 1973 por Francisco Maio como Mas-Tin S.A. en
          BuenosAires, Argentina, la empresa operaba desde 1964 como Plásticos
          MAS. Habiendo comenzado como una industria fabricante de productos
          químicos específicamente focalizada en el mercado de adhesivos y
          selladores a nivel local, en pocos años sería reconocida
          internacionalmente por la alta calidad de sus productos, cualidad que
          hasta el día de hoy se mantiene, siendo uno de los pilares de la
          compañía junto al respeto por nuestros colaboradores, proveedores y
          clientes, y el cuidado del medio ambiente.
        </p>
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
        <Collapse in={isOpen}>
          <p>
            Con los años, mas-tin se convirtió en una marca reconocida y comenzó
            a ser tratada como tal. En la actualidad, está presente en más de
            doce países, la marca mas-tin y todas sus sub-marcas son sinónimo de
            innovación tecnológica focalizada en crear soluciones inteligentes
            para una gran variedad de mercados y segmentos. Contando con dos
            plantas productivas en Latinoamérica, y operaciones de distribución
            y oficinas de representación propias en siete países de la región,
            mas-tin cuenta con profesionales altamente calificados y un gran
            portafolio de productos ajustados a la medida de su necesidad,
            creando así la solución que usted necesita. Lo invitamos a conocer
            el mundo mas-tin, un mundo de soluciones.
          </p>
        </Collapse>
      </WrapperHistory>

      <Wrapper>
        <div className="circle-red"></div>
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
