import styled from "styled-components";

const WrapperPolitics = styled.div`
  display: flex;
  height: 375px;
  width: auto;
  margin: auto;
  background-color: #77cae7;
  gap: 5%;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #bdbebe;
  .column1 {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-flow: column nowrap;
    gap: 7%;
    margin: 0 0 0 10%;
  }
  .column1 h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
  .column1 p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .column2 {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-flow: column nowrap;
    gap: 7%;
    margin: 0 10% 0 0;
  }
  .column2 p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Politicas = () => {
  return (
    <>
      <WrapperPolitics>
        <div className="column1">
          <h2>POLÍTICA DE CALIDAD</h2>
          <p>
            CALIDAD Significa cumplir todos los requisitos acordados con
            nuestros Clientes y Proveedores.
          </p>
          <p>
            CERO DEFECTO Priorizar la prevención en lugar de una costosa
            detección, la meta es cero defecto siempre y desde la primera vez.
          </p>
          <p>
            TRABAJO EN EQUIPO Con Clientes y Proveedores bajo la consigna de
            cooperación, se logra obtener materiales y materias primas de máxima
            Calidad.
          </p>
        </div>
        <div className="column2">
          <p>
            MEJORA CONTINUA Capacitarse para sostener una mejora constante y
            poder cumplir los nuevos requerimientos del mercado.
          </p>
          <p>
            SATISFACCIÓN DEL CLIENTE Solo se alcanza cuando la empresa opera
            bajo la Cultura de Calidad, con una adecuada rentabilidad
            empresaria.
          </p>
        </div>
      </WrapperPolitics>
    </>
  );
};
