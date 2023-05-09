import { useEffect, useContext, memo } from "react";
//import axios from "axios";
import { AppContext } from "../../context/AppContext";

const MainContainer = ({ children }) => {
  const { updateItems } = useContext(AppContext);

  const fetchItems = async () => {
    try {
      const res = await fetch(`https://server-mastin.vercel.app/`);
      const data = await res.json();
      updateItems(data);
    } catch (err) {
      console.log(err);
      console.log("fallo el get");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return <div>{children}</div>;
};

export default memo(MainContainer);
