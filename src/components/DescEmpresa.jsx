import styled from "styled-components";
import { Imagen } from "./index";
import empleados from "../assets/img/img-empleados.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin: auto;
  width: 100%;
  height: 620px;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(189, 191, 191, 0.22) 0,
    rgba(189, 191, 191, 0.22) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 10px 10px;
  background-color: #f6f6f6;
  h2 {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    margin: 3% auto 0 auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #d12e1d;
  }
  .secContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    gap: 10%;
  }
  .secContainer ul {
    margin-top: 5%;
  }
  .secContainer ul li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #595959;
  }
`;

export const DescEmpresa = () => {
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
