import styled from "styled-components";

const WrapperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  box-shadow: 0px 2px 10px 1px #bebdbd;
  height: 66px;
  .burguer {
    @media (min-width: 376px) {
      display: none;
    }
  }
`;

export default WrapperNav;
