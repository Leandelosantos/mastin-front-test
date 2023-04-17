import { Imagen, DataProduct } from "../index";
import Collapse from "react-bootstrap/esm/Collapse";
import { useState, memo } from "react";
import plusIcon from "../../assets/img/plus-icon-red.png";
import minusIcon from "../../assets/img/minus-icon-lightblue.png";
import { WrapperProduct, WrapperCollapse, WrapperButton } from "./components";

const Producto = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WrapperProduct>
        <div className="product">
          <p>{item.PRODUCTO}</p>
          <WrapperButton
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="collapse-text"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <Imagen src={minusIcon} alt="icon" />
            ) : (
              <Imagen src={plusIcon} alt="icon" />
            )}
          </WrapperButton>
        </div>
      </WrapperProduct>
      <Collapse in={isOpen}>
        <WrapperCollapse id="collapse-text">
          <DataProduct item={item} />
        </WrapperCollapse>
      </Collapse>
    </>
  );
};

export default memo(Producto);
