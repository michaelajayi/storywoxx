import React, { useId } from "react";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./WhatTheySay.css";

import WhatTheySayItem from "./WhatTheySayItem";


import adlfarm from '../../assets/img/projects/adl-integrated-farms/01.jpg';
import kh08 from "../../assets/img/projects/keemharun/01.jpg";
import kh03 from "../../assets/img/projects/keemharun/03.jpg";
import keemharun from "../../assets/img/projects/keemharun/05.jpg";
import kh02 from "../../assets/img/projects/keemharun/06.jpg";
import lionandjewel from '../../assets/img/projects/lionandjewel/04.jpg';
import madaani from '../../assets/img/projects/madaani/02.jpg';
import md04 from '../../assets/img/projects/madaani/04.jpg';
import nigeriafirst from "../../assets/img/projects/nigeriafirst/03.jpg";
import wysewater from "../../assets/img/projects/wysewater/02.png";
import zedbaby from "../../assets/img/projects/zedbaby/03.jpg";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const WhatTheySay = () => {
  const id = useId();

  const sliders = [
    {
      text: "Product Design",
      img: zedbaby,
    },
    {
      text: "Logo, Content, Campaign",
      img: kh02,
    },
    {
      text: "Logo, Campaign",
      img: nigeriafirst,
    },
    {
      text: "Content",
      img: keemharun,
    },
    {
      text: "Campaign",
      img: md04,
    },
    {
      text: "Product Design, Logo",
      img: wysewater,
    },
    {
      text: "Campaign, Content",
      img: kh08,
    },
    {
      text: "Product Design",
      img: madaani,
    },
    {
      text: "Content, Campaign",
      img: kh03,
    },
    {
      text: "Logo, Content, Product Design",
      img: zedbaby,
    },
    {
      text: "Logo, Campaign",
      img: lionandjewel,
    },
    {
      text: "Content",
      img: adlfarm,
    },
  ];
  return (
    <Swiper
      slidesPerView={4}
      grabCursor={true}
      effect={"fade"}
      grid={{
        rows: 2,
        fill: "row",
      }}
      spaceBetween={50}
      modules={[Grid, Pagination]}
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
