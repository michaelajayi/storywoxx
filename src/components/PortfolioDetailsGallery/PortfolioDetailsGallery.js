import { Container, Image } from "react-bootstrap";
import { Autoplay, Keyboard, EffectFade } from "swiper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./PortfolioDetailsGallery.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioDetailsGallery = ({ gallery }) => {
  return (
    <Container fluid className='px-0'>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        // effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        keyboard={{ enabled: true }}
        pagination={{
          dynamicBullets: true,
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
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 3,
          },
        }}
      >
        {gallery &&
          gallery.map((gallery, index) => (
            <SwiperSlide key={index}>
              <Image src={gallery.img} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default PortfolioDetailsGallery;
