import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/virtual";
import { Imagen } from "../index";
import { memo } from "react";
import { WrapperSlider } from "./components/index";

const Slider = ({ imagenes }) => (
  <WrapperSlider>
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      spaceBetween={100}
      width={1920}
      centeredSlides={true}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imagenes.map((img) => (
        <SwiperSlide>
          <Imagen src={img} alt={"slider1"} width={"auto"} />
        </SwiperSlide>
      ))}
    </Swiper>
  </WrapperSlider>
);

export default memo(Slider);
