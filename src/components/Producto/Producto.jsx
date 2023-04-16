import styled from "styled-components";
import { Imagen, DataProduct } from "../index";
import Collapse from "react-bootstrap/esm/Collapse";
import { useState } from "react";
import plusIcon from "../../assets/img/plus-icon-red.png";
import minusIcon from "../../assets/img/minus-icon-lightblue.png";
import { memo } from "react";
import { WrapperProduct, WrapperCollapse } from "./components";

export const WrapperButton = styled.button`
  border: none;
  background: white;
  cursor: pointer;
`;

const Producto = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WrapperProduct>
        <div className="product">
          <p>Nombre del producto</p>
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
          <DataProduct />
        </WrapperCollapse>
      </Collapse>
    </>
  );
};

export default memo(Producto);
