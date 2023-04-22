import styled from 'styled-components';

const DEFAULT_SIZE = '28px';

const Pointer = styled.div`
  width: ${DEFAULT_SIZE};
  height: ${DEFAULT_SIZE};
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: -2%;
  z-index: 1;
  transform: rotate(45deg);
  background-color: #ffffff;;
  border-top: solid 1px #ffffff;;
  border-left: solid 1px #ffffff;;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export default Pointer;
