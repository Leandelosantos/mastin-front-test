import { memo, useContext } from "react";
import { WrapperPolitics } from "./components";
import { AppContext } from "../../context/AppContext";

const Politicas = () => {
  const { text } = useContext(AppContext);

  return (
    <>
      <WrapperPolitics>
        <div className="column1">
          <h2>{text.empresa.headerPolitica}</h2>
          <p>{text.empresa.pol1}</p>
          <p>{text.empresa.pol2}</p>
          <p>{text.empresa.pol3}</p>
        </div>
        <div className="column2">
          <p>{text.empresa.pol4}</p>
          <p>{text.empresa.pol5}</p>
        </div>
      </WrapperPolitics>
    </>
  );
};

export default memo(Politicas);
