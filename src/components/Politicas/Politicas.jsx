import { memo } from "react";
import { WrapperPolitics } from "./components";

const Politicas = () => {
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

export default memo(Politicas);
