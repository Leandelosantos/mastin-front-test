import styled from "styled-components";
import { Navbar, Footer } from "./index";

const WrapperContact = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .country {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: start;
    flex-flow: column nowrap;
    margin: 2% 0 0 2%;
  }
  .country h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    color: #77cae7;
  }
  .country p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  .country p:nth-child(5),
  .country p:nth-child(6) {
    font-weight: 600;
  }
  .country iframe {
    border: 0;
    margin: 2% 0;
  }
`;

export const Contacto = () => {
  return (
    <>
      <Navbar />
      <WrapperContact>
        <div className="country">
          <h2>Argentina</h2>
          <p>Dirección: Calle 24 (Anastasio Lanz) 2890.</p>
          <p>Mini Parque Industrial Vergara, Berazategui.</p>
          <p>CP1884, Buenos Aires, Argentina.</p>
          <p>Teléfono: +54(11)4256-1331</p>
          <p>Lunes a Viernes de 8 a 17 hs</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.934894010499!2d-58.224304584289456!3d-34.782414280413526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328c521f03719%3A0xa14649dc34bcd400!2sMas-Tin%20SA!5e0!3m2!1ses!2sar!4v1681164680939!5m2!1ses!2sar"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="country">
          <h2>Brasil</h2>
          <p>Dirección: Av. Mario Covas Jr. 2605.</p>
          <p>Condomínio Dellapar I - Arujá.</p>
          <p>Sao Paulo, Brasil, CEP 07412-000</p>
          <p>Teléfono: +55(11)2481-2900</p>
          <p>Lunes a Viernes de 7 a 17 hs</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830.814218280307!2d-46.36197788255611!3d-23.40165539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce87e3ca2c7747%3A0x82f28d36f7825ca4!2sAv.%20Governador%20M%C3%A1rio%20Covas%20J%C3%BAnior%2C%202755!5e0!3m2!1ses!2sar!4v1681164973109!5m2!1ses!2sar"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </WrapperContact>
      <Footer />
    </>
  );
};
