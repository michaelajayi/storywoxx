import React, { useId } from "react";
import { Container } from "react-bootstrap";
import Breadcrumbs from "../../UIKit/Breadcrumbs/Breadcrumbs";
import Navbar from "../Navbar/Navbar";
import PortfolioItem from "./PortfolioItem";
import Footer from "../Footer/Footer";

import "./Portfolio.css";

import bg01 from "../../assets/img/what-they-say/01.jpg";
import bg02 from "../../assets/img/what-they-say/02.jpg";
import bg03 from "../../assets/img/what-they-say/03.jpg";
import bg04 from "../../assets/img/what-they-say/04.jpg";
import bg05 from "../../assets/img/what-they-say/05.jpg";
import bg06 from "../../assets/img/what-they-say/06.jpg";

const Portfolio = () => {
  const id = useId();

  const portfolioItems = [
    {
      title: "Madaani",
      category: "Design, Photography",
      img: bg01,
    },
    {
      title: "Zed baby",
      category: "Art Design",
      img: bg02,
    },
    {
      title: "Wyse Water",
      category: "Design, Photography",
      img: bg03,
    },
    {
      title: "Lion and Jewel",
      category: "Art, Design",
      img: bg04,
    },
    {
      title: "ADL Integrated Farms",
      category: "Farms, Photography",
      img: bg05,
    },
    {
      title: "Keem Harun",
      category: "Fashion, Design",
      img: bg06,
    },
  ];
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Container
        fluid
        className='portfolio-items__container px-0 d-flex justify-content-center'
      >
        <div className='portfolio-items__row px-0'>
          {portfolioItems.map((item, index) => (
            <div className='px-0 mx-0' key={`${index}-${id}`}>
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Portfolio;
