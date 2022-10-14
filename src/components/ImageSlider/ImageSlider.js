import React, { useId } from "react";
import { Container, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper";
import ImageSliderItem from "./ImageSliderItem";

import "./ImageSlider.css";

import bg01 from "../../assets/img/banner/01.png";
import bg02 from "../../assets/img/banner/02.png";
import bg03 from "../../assets/img/banner/03.png";
import bg04 from "../../assets/img/banner/01.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  const sliders = [
    [
      {
        text: "Opportunity",
        img: bg01,
      },
      {
        text: "Lifestyle",
        img: bg02,
      },
    ],
    [
      {
        text: "Beauty Now",
        img: bg03,
      },
      {
        text: "Organize",
        img: bg04,
      },
    ],
  ];
  return (
    <Container fluid className='mt-5 vh-100 bg-warning px-0'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        effect={"fade"}
        keyboard={{ enabled: true }}
        modules={[Autoplay, Keyboard, EffectFade]}
        className='mySwiper'
        // breakpoints={{
        //   320: {
        //     slidesPerView: 4,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //   },
        //   1440: {
        //     slidesPerView: 4,
        //   },
        // }}
      >
        {/* {sliders.map((slider) => (
          <SwiperSlide>
            <div className='swiper-img-box-wrapper d-flex flex-column gap-5'>
              <ImageSliderItem sliderItem={slider} />
            </div>
          </SwiperSlide>
        ))} */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default ImageSlider;
