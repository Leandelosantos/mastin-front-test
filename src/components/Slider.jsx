import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Imagen } from "./Imagen";
import imagen1 from "../assets/img/imagen1.png";

export const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={100}
        width={1356}
        centeredSlides={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Imagen src={imagen1} alt={"slider1"} width={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
          <Imagen src={imagen1} alt={"slider2"} width={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
          <Imagen src={imagen1} alt={"slider3"} width={"auto"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
