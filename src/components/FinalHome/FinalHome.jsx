import logoDow from "../../assets/img/logo-dow2.png";
import { memo, useContext } from "react";
import { Wrapper } from "./components";
import { Imagen } from "../index";
import { AppContext } from "../../context/AppContext";

const FinalHome = () => {
  const { text } = useContext(AppContext);

  return (
    <>
      <Wrapper>
        <div className="text">
          <h2>{text.finalHome.h1}</h2>
          <p>{text.finalHome.p}</p>
        </div>
        <div className="brands">
          <Imagen src={logoDow} alt="marca" width={"auto"} />
        </div>
      </Wrapper>
    </>
  );
};

export default memo(FinalHome);
