import styled from "styled-components";
import { Imagen, DataProduct } from "./index";
import Collapse from "react-bootstrap/esm/Collapse";
import { useState } from "react";
import plusIcon from "../assets/img/plus-icon-red.png";
import minusIcon from "../assets/img/minus-icon-lightblue.png";

const WrapperProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #595959;
  width: 444px;
  height: 114px;
  border-bottom: 2px solid #d12e1d;
  margin: 0 1%;
  .product {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 160px;
  }
`;

const WrapperButton = styled.button`
  border: none;
  background: white;
  cursor: pointer;
`;

const WrapperCollapse = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 444px;
  height: auto;
  margin: 0 0 0 1%;
`;

export const Producto = () => {
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
          <div>hola</div>
        </WrapperCollapse>
      </Collapse>
    </>
  );
};
