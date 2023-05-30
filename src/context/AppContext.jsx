import React, { createContext, useState, useEffect } from "react";
import wordings from "../wordings";

// Creacion de Contexto para la App
export const AppContext = createContext();

// Creación de Proveedor de Contexto para la App
const AppContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsFiltrosIndustria, setItemsFiltroIndustria] = useState([]);
  const [itemsConsumer, setItemsConsumer] = useState([]);
  const [itemsConstruccion, setItemsConstruccion] = useState([]);
  const [userLogged, setUserLogged] = useState(false);
  const [language, setLanguage] = useState("ESP");
  const [text, setText] = useState(null);

  useEffect(() => {
    const texts = wordings[language];
    setText(texts);
  }, [language]);

  const updateItems = (items) => {
    setItems(items);
  };

  //Se realiza el filtrado de los items de la Base de Datos y se los asigna a una variable para su uso
  useEffect(() => {
    if (items && items.length > 0) {
      const filtroIndustria = items.filter(
        (item) =>
          item.SEGMENTO === "FILTROS" ||
          item.SEGMENTO === "INDUSTRIA" ||
          item.SEGMENTO === "INDUSTRIA / CONSTRUCCIÓN"
      );
      const consumer = items.filter(
        (item) => item.SEGMENTO === "CONSUMER CONFORT"
      );

      const construccion = items.filter(
        (item) =>
          item.SEGMENTO === "CONSTRUCCIÓN" ||
          item.SEGMENTO === "INDUSTRIA / CONSTRUCCIÓN"
      );

      setItemsFiltroIndustria(filtroIndustria);
      setItemsConsumer(consumer);
      setItemsConstruccion(construccion);
    }
  }, [items]);

  return (
    <AppContext.Provider
      value={{
        items,
        updateItems,
        itemsFiltrosIndustria,
        itemsConsumer,
        itemsConstruccion,
        setUserLogged,
        userLogged,
        text,
        setLanguage,
        language,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
