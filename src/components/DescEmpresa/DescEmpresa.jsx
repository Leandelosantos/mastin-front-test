import { Imagen } from "../index";
import empleados from "../../assets/img/img-empleados.png";
import { memo, useContext } from "react";
import { Wrapper } from "./components";
import { AppContext } from "../../context/AppContext";

const DescEmpresa = () => {
  const { text } = useContext(AppContext);

  return (
    <>
      <Wrapper>
        <h2>{text.descEmpresa.h1}</h2>
        <div className="secContainer">
          <Imagen src={empleados} alt="empleados" width={"auto"} />
          <ul>
            <li>{text.descEmpresa.l1}</li>
            <li>{text.descEmpresa.l2}</li>
            <li>{text.descEmpresa.l3}</li>
            <li>{text.descEmpresa.l4}</li>
            <li>{text.descEmpresa.l5}</li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

export default memo(DescEmpresa);
