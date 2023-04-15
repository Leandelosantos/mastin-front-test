import styled from "styled-components";
import { Imagen } from "./Imagen";
import logoDow from "../assets/img/logo-dow.png";
import logoDow2 from "../assets/img/logo-dow2.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  padding: 5% 0;
  box-shadow: 0px 0px 6px 1px #bdbebe;
  filter: drop-shadow(0px 4px 4px #bdbebe);

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin-bottom: 1%;
  }
  .text h2 {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 300;
    font-size: 72px;
    line-height: 90px;
    text-align: center;
    color: #595959;
  }
  .text p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
`;

export const FinalHome = () => {
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
