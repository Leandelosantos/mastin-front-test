import { useEffect, useContext, memo } from "react";
//import axios from "axios";
import { AppContext } from "../../context/AppContext";

const URI = `https://server-mastin-abm.vercel.app/products`;
const URIport = `https://server-mastin-abm.vercel.app/productsPort`;

const MainContainer = ({ children }) => {
  const { updateItems, updateItemsPort, setLanguage, text, language } =
    useContext(AppContext);

  const fetchItems = async () => {
    try {
      if (language === "ESP") {
        const res = await fetch(URI);
        const data = await res.json();
        updateItems(data);
      } else {
        const res = await fetch(URIport);
        const data = await res.json();
        updateItemsPort(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
    setLanguage(language);
  }, [language]);

  return <>{text ? <div>{children}</div> : null}</>;
};

export default memo(MainContainer);
