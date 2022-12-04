import React, { Fragment } from "react";
import DigitalExperience from "../DigitalExperience/DigitalExperience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import OurBusinessThrives from "../OurBusinessThrives/OurBusinessThrives";
import Review from "../Reviews/Review";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Homepage = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Testimonials />
      <Review />
      <DigitalExperience />
      <OurBusinessThrives />
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
