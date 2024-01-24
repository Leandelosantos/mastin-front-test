import { memo } from "react";
import { WrapperContact } from "./components";

const Contacto = () => {
  return (
    <>
      <WrapperContact>
        <div className="country">
          <h2>Argentina</h2>
          <p>Dirección: Calle 1236 n° 960.</p>
          <p>Parque Industrial PITEC, Lote 66.</p>
          <p>Ing. J Allan, Florencio Varela CP 1891, Argentina.</p>
          <p>Teléfono: +54 (11) 2120-1700</p>
          <p>Lunes a Viernes de 8 a 17 hs</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.3299291161243!2d-58.195647724382226!3d-34.84793637286769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d7ff2e248f6b%3A0x13a6d078d9f675a2!2sPitec%20-%20Parque%20Industrial%20y%20Tecnol%C3%B3gico%20Florencio%20Varela!5e0!3m2!1ses-419!2sar!4v1706103568844!5m2!1ses-419!2sar"
            width="800"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="country">
          <h2>Brasil</h2>
          <p>Endereço: Av. Governador Mario Covas Júnior, N. 2605</p>
          <p>Condomínio Dellapar I - Arujá.</p>
          <p>Sao Paulo, Brasil, CEP 07412-000</p>
          <p>Telefone: +55(11)2481-2900</p>
          <p>Segunda a Sexta das 7 até 17 hs</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830.814218280307!2d-46.36197788255611!3d-23.40165539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce87e3ca2c7747%3A0x82f28d36f7825ca4!2sAv.%20Governador%20M%C3%A1rio%20Covas%20J%C3%BAnior%2C%202755!5e0!3m2!1ses!2sar!4v1681164973109!5m2!1ses!2sar"
            width="800"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </WrapperContact>
    </>
  );
};

export default memo(Contacto);
