import { useEffect, useContext, memo } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const MainContainer = ({ children }) => {
  const { items, updateItems } = useContext(AppContext);
  console.log(items);
  const fetchItems = async () => {
    try {
      const method =
        window.location.hostname === "localhost" ? "http" : "https";
      const res = await axios.get(
        `${method}://${window.location.hostname}:8800/items`
      );
      updateItems(res.data);
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
