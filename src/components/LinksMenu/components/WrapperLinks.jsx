import styled from "styled-components";

const WrapperLinks = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #595959;
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
  }
  li {
    color: #595959;
  }
`;

export default WrapperLinks;
