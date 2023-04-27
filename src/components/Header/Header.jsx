import { memo } from "react";
import { HeaderComponent } from "./components";

const Header = ({ text, ...props }) => (
  <HeaderComponent {...props}>{text}</HeaderComponent>
);

export default memo(Header);
