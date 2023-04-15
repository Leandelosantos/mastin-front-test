import styled from "styled-components";
import { Header2 } from ".";
import { Navbar, Slider, ButtonPlus, Politicas, Footer } from "./index";

const WrapperHistory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: auto;
  flex-flow: column nowrap;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.6267px;
    line-height: 25px;
    color: #595959;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin: auto;
  width: 100%;
  height: 580px;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(189, 191, 191, 0.22) 0,
    rgba(189, 191, 191, 0.22) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 10px 10px;
  background-color: #f6f6f6;
  .circle-red {
    background-color: #fff;
    width: 215px;
    height: 215px;
    border-radius: 50%;
    border: 1px solid #d12e1d;
  }
  .president {
    text-align: center;
    margin-top: 1%;
  }
  .president p:nth-child(1) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  .president p:nth-child(2) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #595959;
  }
`;

export const Empresa = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Header2>
        Contamos con el mejor equipo de profesionales para atender todas sus
        consultas
      </Header2>
      <WrapperHistory>
        <p>
          Registrada en Julio de 1973 por Francisco Maio como Mas-Tin S.A. en
          BuenosAires, Argentina, la empresa operaba desde 1964 como Plásticos
          MAS. Habiendo comenzado como una industria fabricante de productos
          químicos específicamente focalizada en el mercado de adhesivos y
          selladores a nivel local, en pocos años sería reconocida
          internacionalmente por la alta calidad de sus productos, cualidad que
          hasta el día de hoy se mantiene, siendo uno de los pilares de la
          compañía junto al respeto por nuestros colaboradores, proveedores y
          clientes, y el cuidado del medio ambiente.
        </p>
        {/* <ButtonPlus /> */}
      </WrapperHistory>

      <Wrapper>
        <div className="circle-red"></div>
        <div className="president">
          <p>Susana Argüello de Maio</p>
          <p>Presidente</p>
        </div>
      </Wrapper>
      <Politicas />
      <Footer />
    </>
  );
};
