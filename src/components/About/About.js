import React, { Fragment } from "react";
import AboutServices from "../AboutServices/AboutServices";
import DayToDayWork from "../DayToDayWork/DayToDayWork";

import Footer from "../Footer/Footer";
import NavbarAlt from "../NavbarAlt/NavbarAlt";
import SayHi from "../SayHi/SayHi";
import VideoPlayerAbout from "../VideoPlayerAbout/VideoPlayerAbout";
import AboutUsSlider from "../AboutUsSlider/AboutUsSlider";
import AboutIntro from "../AboutIntro/AboutIntro";
import TwoColumns from "../TwoColumns/TwoColumns";

import bgImage from "../../assets/img/banner/about-us-banner-01.jpg";

import "./About.css";

const About = () => {
  return (
    <Fragment>
      <NavbarAlt
        bgImage={bgImage}
        pageTitle='About Us'
        breadcrumbs='Home / About Us'
      />
      <AboutIntro />
      <TwoColumns />
      <AboutServices />
      <AboutUsSlider />
      <DayToDayWork />
      <SayHi />
      <Footer />
    </Fragment>
  );
};

export default About;
