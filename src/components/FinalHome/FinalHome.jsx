import logoDow from "../../assets/img/logo-dow.png";
import logoDow2 from "../../assets/img/logo-dow2.png";
import { memo } from "react";
import { Wrapper } from "./components";
import { Imagen } from "../index";

const FinalHome = () => {
  return (
    <>
      <Wrapper>
        <div className="text">
          <h2>CONFIAN EN NOSOTROS</h2>
          <p>Con una amplia trayectoria estamos contentos de crecer juntos</p>
        </div>
        <div>
          <Imagen src={logoDow} alt="marca" />
          <Imagen src={logoDow2} alt="marca" />
        </div>
      </Wrapper>
    </>
  );
};

export default memo(FinalHome);
