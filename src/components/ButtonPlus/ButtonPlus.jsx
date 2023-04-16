import { Imagen, DataProduct } from "../index";
import plusIcon from "../../assets/img/plus-icon-red.png";
import { useState, memo } from "react";
import Collapse from "react-bootstrap/Collapse";
import { WrapperButton } from "./components";

const ButtonPlus = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WrapperButton
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="example-collapse-text"
        aria-expanded={isOpen}
      >
        <Imagen src={plusIcon} alt="icon" />
      </WrapperButton>
      {/* <Collapse in={isOpen}>
        <div id="example-collapse-text">
          <DataProduct />
        </div>
      </Collapse> */}
    </>
  );
};

export default memo(ButtonPlus);
