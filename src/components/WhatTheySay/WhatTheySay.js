import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import WhatTheySayItem from "./WhatTheySayItem";

import { default as bg01, default as bg04 } from "../../assets/img/banner/01.png";
import bg02 from "../../assets/img/banner/02.png";
import bg03 from "../../assets/img/banner/03.png";

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
        img: bg01,
      },
      {
        text: "Art",
        img: bg02,
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
      className='mySwiper mt-5 vw-100'
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
