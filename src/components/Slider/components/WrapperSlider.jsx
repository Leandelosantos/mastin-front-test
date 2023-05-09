import styled from "styled-components";

const WrapperSlider = styled.div`
  width: 100%;
  padding: 3% 5%;
  .swiper-slide img {
    height: 700px;
  }

  @media (max-width: 1281px) {
    .swiper-slide img {
      height: auto;
    }
  }
`;

export default WrapperSlider;
