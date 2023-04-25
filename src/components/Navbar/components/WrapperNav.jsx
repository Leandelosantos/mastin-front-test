import styled from "styled-components";

const WrapperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  box-shadow: 0px 2px 10px 1px #bebdbd;
  height: 66px;

  .burguer {
    @media (min-width: 1281px) {
      display: none;
    }
  }

  .sideBar {
    position: absolute;
    height: 100vh;
    width: 266px;
    top: 0;
    right: 0;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    box-shadow: -1px 4px 12px #bebdbd;
    padding-left: 32px;
    padding-top: 15px;
    z-index: 100;
  }
`;

export default WrapperNav;
