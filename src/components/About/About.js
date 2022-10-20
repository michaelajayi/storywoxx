import React, { Fragment } from "react";
import AboutServices from "../AboutServices/AboutServices";
import DayToDayWork from "../DayToDayWork/DayToDayWork";

import Footer from "../Footer/Footer";
import NavbarAlt from "../NavbarAlt/NavbarAlt";
import SayHi from "../SayHi/SayHi";
import VideoPlayerAbout from "../VideoPlayerAbout/VideoPlayerAbout";
import AboutUsSlider from "../AboutUsSlider/AboutUsSlider";

import bgImage from "../../assets/img/banner/about-us-banner.jpg";

import "./About.css";

const About = () => {
  return (
    <Fragment>
      <NavbarAlt
        bgImage={bgImage}
        pageTitle='About Us'
        breadcrumbs='Home / About Us'
      />
      <AboutServices />
      {/* <AboutUsSlider /> */}
      <VideoPlayerAbout />
      <DayToDayWork />
      <SayHi />
      <Footer />
    </Fragment>
  );
};

export default About;
