import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownLink = styled(Link)`
  float: left;
  overflow: hidden;
  display: block;

  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    .dropdown {
      display: block;
    }
  }

  .dropdown {
    display: none;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    top: 48px;
  }

  .dropdownContent {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: inset 0px -1px 0px rgba(209, 46, 29, 0.54);
    z-index: 10;
    position: relative;
    width: 136px;
    width: 100%;

    .dropdownElement {
      :last-child {
        border-bottom: none;
      }
      border-bottom: 1px solid rgba(209, 46, 29, 0.54);
      width: 100%;
      padding: 12px 10.5px;
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        text-decoration: none;
        color: #595959;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
      }

      a:hover {
        font-weight: 600;
      }
    }
  }
`;

export default DropdownLink;
