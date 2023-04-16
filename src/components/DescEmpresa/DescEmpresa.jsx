import { Imagen } from "../index";
import empleados from "../../assets/img/img-empleados.png";
import { memo } from "react";
import { Wrapper } from "./components";

const DescEmpresa = () => {
  return (
    <>
      <Wrapper>
        <h2>
          Contamos con el mejor equipo de profesionales para atender todas sus
          consultas
        </h2>
        <div className="secContainer">
          <Imagen src={empleados} alt="empleados" />
          <ul>
            <li>Desarrollo de productos a medida</li>
            <li>Amplio conocimiento en procesos productivos</li>
            <li>Soporte en todas las etapas del proyecto</li>
            <li>Entrenamiento permanente a nuestros clientes</li>
            <li>Innovacíon Constante</li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

export default memo(DescEmpresa);
