import React, { createContext, useState, useEffect } from "react";

// Creacion de Contexto para la App
export const AppContext = createContext();

// Creación de Proveedor de Contexto para la App
const AppContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsFiltros, setItemsFiltro] = useState([]);
  const [itemsIndustria, setItemsIndustria] = useState([]);
  const [itemsConstruccion, setItemsConstruccion] = useState([]);

  const updateItems = (items) => {
    setItems(items);
  };

//Se realiza el filtrado de los items de la Base de Datos y se los asigna a una variable para su uso
  useEffect(() => {
    if (items && items.length > 0) {
      const filtro = items.filter((item) => item.SEGMENTO === "FILTROS");
      const industria = items.filter(
        (item) =>
          item.SEGMENTO === "INDUSTRIA" ||
          item.SEGMENTO === "INDUSTRIA / CONSTRUCCIÓN"
      );
      const construccion = items.filter(
        (item) =>
          item.SEGMENTO === "CONSTRUCCION" ||
          item.SEGMENTO === "INDUSTRIA / CONSTRUCCIÓN"
      );

      setItemsFiltro(filtro);
      setItemsIndustria(industria);
      setItemsConstruccion(construccion);
    }
  }, [items]);

  return (
    <AppContext.Provider
      value={{
        items,
        updateItems,
        itemsFiltros,
        itemsIndustria,
        itemsConstruccion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
