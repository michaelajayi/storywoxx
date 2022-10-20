import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";
import Review from "../Reviews/Review";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Testimonials />
      <Review />
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
