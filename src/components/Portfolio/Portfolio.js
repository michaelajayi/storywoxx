import React, { useId } from "react";
import { Container } from "react-bootstrap";
import Breadcrumbs from "../../UIKit/Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PortfolioItem from "./PortfolioItem";

import { portfolios } from "../../utils/portfolios";

import "./Portfolio.css";

const Portfolio = () => {
  const id = useId();

  return (
    <>
      <Navbar />
      <Breadcrumbs breadcrumbs='home / portfolio' />
      <Container
        fluid
        className='portfolio-items__container px-0 d-flex flex-column align-items-center justify-content-center gap-5'
      >
        <h1 className='main-heading text-center' style={{ marginTop: "5rem", marginBottom: '4rem' }}>
          Our Recent Projects
        </h1>
        <div className='portfolio-items__row px-0'>
          {portfolios.map((item, index) => (
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
