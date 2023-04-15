import styled from "styled-components";
import { Imagen } from "./Imagen";
import frame21 from "../assets/img/frame21.png";
import frame22 from "../assets/img/frame22.png";
import frame23 from "../assets/img/frame23.png";
import { Link } from "react-router-dom";

const WrapperFrames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  width: 100%;
  gap: 1%;
`;

export const Frames = () => {
  return (
    <>
      <WrapperFrames>
        <Link to={"/filtros"}>
          <Imagen src={frame21} alt="filtros" />
        </Link>
        <Link to={"/construccion"}>
          <Imagen src={frame22} alt="construccion" />
        </Link>
        <Link to={"/industria"}>
          <Imagen src={frame23} alt="industria" />
        </Link>
      </WrapperFrames>
    </>
  );
};
