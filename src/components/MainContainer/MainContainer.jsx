import { useEffect, useContext, memo } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const MainContainer = ({ children }) => {
  const { items, updateItems } = useContext(AppContext);

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:8800/items");
      updateItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return <div>{children}</div>;
};

export default memo(MainContainer);
