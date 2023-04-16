import { memo } from "react";
import { HeaderComponent } from "./components";

const Header = ({ text }) => <HeaderComponent>{text}</HeaderComponent>;

export default memo(Header);
