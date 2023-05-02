import { useEffect, useContext, memo } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const MainContainer = ({ children }) => {
  const { items, updateItems } = useContext(AppContext);
  console.log(items);
  const fetchItems = async () => {
    try {
      //const method =
      //window.location.hostname === "localhost" ? "http" : "https";
      const res = await axios.get(`https://${window.location.hostname}:8800`);
      updateItems(res.data);
    } catch (err) {
      console.error(err);
      console.log(err);
      console.log("fallo el get");
    }
    /* try {
      const method =
        window.location.hostname === "localhost" ? "http" : "https";
      const res = await fetch(`${method}://${window.location.hostname}:3306`);
      const data = await res.json();
      console.log(data);
      updateItems(data);
    } catch (err) {
      console.log(err);
      console.log("fallo el get");
    } */
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return <div>{children}</div>;
};

export default memo(MainContainer);
