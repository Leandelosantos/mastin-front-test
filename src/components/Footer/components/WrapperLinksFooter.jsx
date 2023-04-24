import styled from "styled-components";
import WrapperLinks from "./WrapperLinks";

const WrapperLinksFooter = styled(WrapperLinks)`
  font-family: "Inter";
  gap: 10%;
  flex-flow: column nowrap;
  a:hover {
    font-weight: 600;
  }
`;

export default WrapperLinksFooter;
