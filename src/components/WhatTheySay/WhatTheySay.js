import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import WhatTheySayItem from "./WhatTheySayItem";

import bg01 from "../../assets/img/what-they-say/01.jpg";
import bg02 from "../../assets/img/what-they-say/02.jpg";
import bg03 from "../../assets/img/what-they-say/03.jpg";
import bg04 from "../../assets/img/what-they-say/04.jpg";
import bg05 from "../../assets/img/what-they-say/05.jpg";
import bg06 from "../../assets/img/what-they-say/06.jpg";
import bg07 from "../../assets/img/what-they-say/07.jpg";
import bg08 from "../../assets/img/what-they-say/08.jpg";

import "./WhatTheySay.css";

const WhatTheySay = () => {
  const id = useId();

  const sliders = [
    [
      {
        text: "Opportunity",
        img: bg01,
      },
      {
        text: "Best Style",
        img: bg02,
      },
    ],
    [
      {
        text: "Blessing",
        img: bg03,
      },
      {
        text: "Organize",
        img: bg04,
      },
    ],
    [
      {
        text: "Beauty Now",
        img: bg05,
      },
      {
        text: "Art",
        img: bg06,
      },
    ],
    [
      {
        text: "Beauty Now",
        img: bg07,
      },
      {
        text: "Art",
        img: bg08,
      },
    ],
    [
      {
        text: "Beauty Now",
        img: bg01,
      },
      {
        text: "Art",
        img: bg02,
      },
    ],
    [
      {
        text: "Beauty Now",
        img: bg03,
      },
      {
        text: "Art",
        img: bg04,
      },
    ],
  ];
  return (
    <Swiper
      slidesPerView={4}
      grabCursor={true}
      effect={"fade"}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
        1920: {
          slidesPerView: 4,
        },
      }}
      className='mySwiper__whattheysay mt-5 vw-100'
    >
      {sliders.map((slider, index) => (
        <SwiperSlide key={`${id}-${index}`}>
          <WhatTheySayItem item={slider} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WhatTheySay;
