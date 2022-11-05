import React from "react";
import Footer from "../Footer/Footer";
import NavbarAlt from "../NavbarAlt/NavbarAlt";

import TwoColumnsLeft from "../TwoColumnsLeft/TwoColumnsLeft";
import TwoColumnsRight from "../TwoColumnsRight/TwoColumnsRight";

import digitalMarketing from "../../assets/img/banner/digital-marketing-services.jpg";
import webDevelopment from "../../assets/img/banner/what-we-do-2.jpg";
import brandMarketing from "../../assets/img/banner/what-we-do-banner.jpg";
import TwoColRightImg from "../../assets/img/two-column-img.jpg";

import "./WhatWeDo.css";

const WnatWeDo = () => {
  return (
    <>
      <NavbarAlt
        bgImage={brandMarketing}
        pageTitle='What We Do'
        breadcrumbs='Home / What We Do'
      />
      <TwoColumnsRight
        subtitle='01'
        title='Brand Strategy Services'
        rightBanner={TwoColRightImg}
        buttonText='Learn More'
        buttonLink='brand-marketing'
        desc='Every brand is different, we produce the brand awareness and attention your business deserves to stand out from the competition.'
      />
      <TwoColumnsLeft
        subtitle='02'
        title='Web Design and Development Services'
        leftBanner={webDevelopment}
        buttonText='Learn More'
        buttonLink='web-development'
        desc='Your brand image should influence a perception and create an impression of your business abilities, and we want you to shine.'
      />
      <TwoColumnsRight
        subtitle='03'
        title='Digital Markerting Services'
        rightBanner={digitalMarketing}
        buttonText='Learn More'
        buttonLink='digital-marketing'
        desc='We know what’s needed to see results in the world of digital marketing. That’s why we work hard and think creatively to build engagement that produces measurable results.'
      />
      <Footer />
    </>
  );
};

export default WnatWeDo;
