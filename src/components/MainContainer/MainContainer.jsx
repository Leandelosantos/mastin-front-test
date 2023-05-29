import { useEffect, useContext, memo } from "react";
//import axios from "axios";
import { AppContext } from "../../context/AppContext";

const MainContainer = ({ children }) => {
  const { updateItems, setLanguage, text } = useContext(AppContext);

  const fetchItems = async () => {
    try {
      const res = await fetch(`https://server-mastin-abm.vercel.app/products`);
      const data = await res.json();
      updateItems(data);
    } catch (err) {
      console.log(err);
      console.log("fallo el get");
    }
  };

  useEffect(() => {
    fetchItems();
    setLanguage("ESP");
  }, []);

  return <>{text ? <div>{children}</div> : null}</>;
};

export default memo(MainContainer);
