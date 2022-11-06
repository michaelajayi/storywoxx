import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Homepage from "./components/Homepage/Homepage";
import NotFound from "./components/NotFound/NotFound";
import Portfolio from "./components/Portfolio/Portfolio";
import BrandMarketing from "./components/SingleService/BrandMarketing/BrandMarketing";
import DigitalMarketing from "./components/SingleService/DigitalMarketing/DigitalMarketing";
import WebDesign from "./components/SingleService/WebDevelopment/WebDevelopment";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

// stylessheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./MediaQueries.css";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='about-us' element={<About />} />
      {/* <Route path='blog' element={<Blog />} /> */}
      <Route path='services' element={<WhatWeDo />} />
      <Route path='services/brand-marketing' element={<BrandMarketing />} />
      <Route path='services/web-development' element={<WebDesign />} />
      <Route path='services/digital-marketing' element={<DigitalMarketing />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
