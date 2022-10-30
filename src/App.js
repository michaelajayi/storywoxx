import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import About from "./components/About/About";
import Homepage from "./components/Homepage/Homepage";
import NotFound from "./components/NotFound/NotFound";
import ContactUs from "./components/ContactUs/ContactUs";
import Portfolio from "./components/Portfolio/Portfolio";
import WnatWeDo from "./components/WhatWeDo/WnatWeDo";

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
      <Route path='services' element={<WnatWeDo />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
