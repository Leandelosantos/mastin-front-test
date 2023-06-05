import styled from "styled-components";

const WrapperFrames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  width: auto;
  flex-wrap: nowrap;
  padding: 0 5%;
  gap: 30px;

  a {
    text-decoration: none;
    color: rgb(89, 89, 89);
  }
  p {
    margin-bottom: 0.5rem;
    font-family: "Inter";
    font-size: 18px;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    flex-flow: column wrap;
  }
`;

export default WrapperFrames;
