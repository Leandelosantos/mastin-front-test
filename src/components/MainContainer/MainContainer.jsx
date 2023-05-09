import { useEffect, useContext, memo } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const MainContainer = ({ children }) => {
  const { updateItems } = useContext(AppContext);

  const fetchItems = async () => {
    try {
      const method =
        window.location.hostname === "localhost" ? "http" : "https";
      console.log(`${window.location.hostname}`);
      const res = await axios.get(`${method}://${window.location.host}`);
      console.log(res.data);
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
      ${method}://
      console.log("fallo el get");
    } */
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return <div>{children}</div>;
};

export default memo(MainContainer);
