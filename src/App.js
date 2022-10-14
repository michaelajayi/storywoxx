import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./MediaQueries.css";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Testimonials />
    </>
  );
};

export default App;
