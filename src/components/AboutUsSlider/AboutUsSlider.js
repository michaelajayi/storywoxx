import React from "react";
import { Container, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper";
import "./AboutUsSlider.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sliderImg01 from "../../assets/img/about-slider-images/01.jpg";
import sliderImg02 from "../../assets/img/about-slider-images/02.jpg";
import sliderImg03 from "../../assets/img/about-slider-images/03.jpg";
import sliderImg04 from "../../assets/img/about-slider-images/04.jpg";

const AboutUsSlider = () => {
  return (
    <Container fluid className='px-0 about-us-slider__container'>
      <Swiper
        slidesPerView={2}
        // slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Keyboard]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
          },
          1920: {
            slidesPerView: 2,
          },
        }}
        className='mySwiper d-flex flex-column justify-content-center align-items-center'
      >
        <SwiperSlide>
          <Image src={sliderImg01} className='about__slide__image' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImg02} className='about__slide__image' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImg03} className='about__slide__image' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImg04} className='about__slide__image' />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default AboutUsSlider;
