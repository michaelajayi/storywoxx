import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Breadcrumbs from "../../../UIKit/Breadcrumbs/Breadcrumbs";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

import bgImage from "../../../assets/img/digital-experience.jpg";

import "./BrandMarketing.css";

const BrandMarketing = () => {
  
  const theHow = [
    {
      title: "Research",
      text: "Discover opportunities, understanding your how to elevate it to a whole new level, understand your competition and target audiences.",
    },
    {
      title: "Brand Strategy",
      text: "We will create a detailed step by step process to achieve success; linking purpose, style, messaging content and culture to profitability.",
    },
    {
      title: "Brand Identity",
      text: "The image of your brand from design, color, logo and other visual components that create your overall identity.",
    },
    {
      title: "Brand Messaging",
      text: "Your brands unique tone will be used across all content to convey your message to a target audience.",
    },
    {
      title: "xBrand Web & Digital",
      text: "Having a great website and branded digital assets are an essential part for a successful business to communicate your brand value.",
    },
    {
      title: "Content Creation",
      text: "Providing useful information to your audience, attracting potential customers to your website, and retaining existing customers through quality engagement.",
    },
    {
      title: "Creative Campaigns",
      text: "Help promote your brand with creative campaigns to build your brand online presence and capture the attention of your audience.",
    },
  ];
  return (
    <Container fluid className='px-0'>
      <Navbar />
      <Breadcrumbs breadcrumbs='home / services / brand marketing' />
      {/* Brand Marketing Intro */}
      <Container className='px-0 brand-intro__container px-3'>
        <div className='d-flex flex-column gap-4'>
          <div className='d-flex flex-column gap-2'>
            <p className='brand-intro__subheading sub-heading'>
              Our Business Thrives
            </p>
            <h1 className='main-heading brand-intro__heading'>
              Unlock Your Limitless Brand Potential
            </h1>
          </div>
          <p className='brand-intro__desc'>
            Every brand is different, we produce the brand awareness and
            attention your business deserves to stand out from the competition.
            Your brand is more than a name and logo. It’s your business’s DNA.
            It’s your employees, customers, culture, and identity.
          </p>
          <p className='brand-intro__sub'>
            By uncovering your business’ unique identity, we develop a brand
            that speaks to your values, shows who you are, finds your purpose,
            and forms an unbreakable bond with your customers.
          </p>
        </div>
      </Container>

      {/* <Container fluid className='px-0 bg-danger image-showcase'>
        <Image src={bgImage} />
      </Container> */}

      {/* TwoColumnsLeft */}
      <Container fluid className='px-0 brand-story__container'>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className='px-0 brand-story__cover'
          >
            <Image src={bgImage} />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className='d-flex align-items-center justify-content-center brand-story px-4'
          >
            <div className='d-flex flex-column gap-5'>
              <div className='d-flex flex-column gap-3'>
                <h4 className='main-heading'>What’s your brand’s story?</h4>
                <p className='brand-story__desc'>
                  A brand needs heart and soul. Something to stand for and
                  behind. Whether you are just getting started, or you need a
                  brand refresh, our creative team is here to help.
                </p>
              </div>
              <p className='brand-story__sub'>
                We’ll work with you to create the feel, look, brand identity
                logo and other creative elements to strengthen your company’s
                identity and build consistent, authentic representation, both
                offline and online.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Brand Marketing Highlights */}
      <Container className='services-highlight px-3'>
        <div className='d-flex flex-column gap-2'>
          <p className='sub-heading'>Our Brand Strategy Process</p>
          <h1 className='main-heading services-highlight__heading'>
            Building Brand Powerhouses
          </h1>
        </div>
        <div className='services-highlight__items'>
          {theHow.map((how, index) => (
            <div className='d-flex flex-column gap-3' key={index}>
              <h4>{how.title}</h4>
              <p>{how.text}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </Container>
  );
};

export default BrandMarketing;
