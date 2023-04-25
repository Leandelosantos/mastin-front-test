import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/virtual";
import { Imagen } from "../index";
import imagen1 from "../../assets/img/imagen1.png";
import { memo } from "react";
import { WrapperSlider } from "./components/index";

const Slider = ({ imagenes }) => (
  <WrapperSlider>
    <Swiper
      modules={[Autoplay, Virtual]}
      autoplay={{ delay: 3000 }}
      spaceBetween={100}
      width={1920}
      centeredSlides={true}
      slidesPerView={1}
      /* updateOnWindowResize={true} */
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      virtual
    >
      {/* {console.log(imagenes)}
      {imagenes.map((img) => {
        <SwiperSlide>
          <Imagen
            src={img}
            alt={"slider1"}
            width={"auto"}
          />
        </SwiperSlide>;
      })} */}
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
  </WrapperSlider>
);

export default memo(Slider);
