import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Imagen } from "../index";
import imagen1 from "../../assets/img/imagen1.png";
import { memo } from "react";

const Slider = ({ imagenes }) => (
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
    {imagenes.map((img) => {
      <SwiperSlide>
        <Imagen src={img} alt={"slider1"} width={"auto"} />
      </SwiperSlide>;
    })}
    {console.log(imagenes)}
    {/* <SwiperSlide>
      <Imagen src={imagenes} alt={"slider1"} width={"auto"} />
    </SwiperSlide>
    <SwiperSlide>
      <Imagen src={imagen1} alt={"slider2"} width={"auto"} />
    </SwiperSlide>
    <SwiperSlide>
      <Imagen src={imagen1} alt={"slider3"} width={"auto"} />
    </SwiperSlide> */}
  </Swiper>
);

export default memo(Slider);
