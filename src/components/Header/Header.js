import React, { useId } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper";
import HeaderItem from "./HeaderItem";
import SubHeader from "../SubHeader/SubHeader";
import './Header.css';

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bg01 from "../../assets/img/banner/01.png";
import bg02 from "../../assets/img/banner/03.png";
import bg03 from "../../assets/img/banner/02.png";

const Header = () => {
  const id = useId();

  const headerItems = [
    {
      small: "Step in the right direction",
      title: "World class team built for you",
      buttonText: "View more",
      buttonUrl: "/view-more",
      bg: bg01,
    },
    {
      small: "Step in the right direction",
      title: "World class team built for you",
      buttonText: "View more",
      buttonUrl: "/view-more",
      bg: bg02,
    },
    {
      small: "Step in the right direction",
      title: "World class team built for you",
      buttonText: "View more",
      buttonUrl: "/view-more",
      bg: bg03,
    },
  ];
  return (
    <Container fluid className='px-0 header__wrapper'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        effect={"fade"}
        loop={true}
        keyboard={{ enabled: true }}
        // autoplay={{
        //   delay: 6000,
        //   disableOnInteraction: true,
        // }}
        navigation={true}
        modules={[Autoplay, Navigation, Keyboard, EffectFade]}
        className='mySwiper'
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 1,
          },
        }}
      >
        {headerItems.map((item, index) => (
          <SwiperSlide key={`${id}-${index}`}>
            <HeaderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SubHeader />
    </Container>
  );
};

export default Header;
