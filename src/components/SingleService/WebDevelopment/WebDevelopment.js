import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Breadcrumbs from "../../../UIKit/Breadcrumbs/Breadcrumbs";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import WebDevelopmentSlider from "./WebDevelopmentSlider";

import bgImage from "../../../assets/img/digital-experience.jpg";

import "./WebDevelopment.css";

const WebDevelopment = () => {
  return (
    <Container fluid className='px-0'>
      <Navbar />
      <Breadcrumbs breadcrumbs='home / services / web development' />
      {/* Brand Marketing Intro */}
      <Container className='px-0 brand-intro__container px-3'>
        <div className='d-flex flex-column gap-4'>
          <div className='d-flex flex-column gap-2'>
            <p className='brand-intro__subheading sub-heading'>
              Our Business Thrives
            </p>
            <h1 className='main-heading brand-intro__heading'>
              Web Solutions & Experience Design
            </h1>
          </div>
          <p className='brand-intro__desc'>
            Your brand image should influence a perception and create an
            impression of your business abilities, and we want you to shine.
          </p>

          <p className='brand-intro__desc'>
            StoryWoxx develops websites and e-commerce platforms that uniquely
            communicate who you are, demonstrate why you’re important, create
            maximum conversions, drive business growth and profitability, and
            visually get noticed with mind-boggling design. We build brand
            image.
          </p>
        </div>
      </Container>

      <Container fluid className='px-0 web-development__container'>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className='px-0 web-development__cover'
          >
            <Image src={bgImage} />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className='d-flex align-items-center justify-content-center web-development px-4'
          >
            <div className='d-flex flex-column gap-5'>
              <div className='d-flex flex-column gap-3'>
                <h4 className='main-heading web-development__heading'>
                  A Plan That’s Built for Your Business
                </h4>
                <p className='web-development__desc'>
                  Using a pointed plan that leverages a mix of tactics —from
                  high level messaging to paid media — we’ll craft a custom
                  strategy that will help you succeed in the ever-changing
                  online space.
                </p>
                <p className='web-development__sub'>
                  With our years of experience in the web design and development
                  industry, we know what it takes to produce.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Brand Marketing Highlights */}
      <Container className='services-highlight px-3 px-lg-0 d-flex flex-column gap-4'>
        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
          <p className='sub-heading'>Website Development Process</p>
        </div>
        <WebDevelopmentSlider />
      </Container>
      <Footer />
    </Container>
  );
};

export default WebDevelopment;
