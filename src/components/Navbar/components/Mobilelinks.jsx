import styled from "styled-components";

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  a {
    text-decoration: none;
    color: #595959;
    margin-bottom: 10px;
  }
  a:hover {
    font-weight: 600;
  }
  span:hover {
    font-weight: 600;
  }
  span {
    color: #595959;
    cursor: pointer;
    margin-bottom: 10px;
  }
  li {
    color: #595959;
    list-style: none;
  }
`;

export default MobileLinks;
