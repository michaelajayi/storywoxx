import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./MediaQueries.css";
import Testimonials from "./components/Testimonials/Testimonials";
import Review from "./components/Reviews/Review";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Testimonials />
      <Review />
      <Footer />
    </>
  );
};

export default App;
