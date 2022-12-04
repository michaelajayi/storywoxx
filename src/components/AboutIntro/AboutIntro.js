import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import SliderText from "../SliderText/SliderText";
import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <Container
      fluid
      className='bg-white px-0 d-flex align-items-center justify-content-center'
    >
      <Row className='about-intro__row gap-5 justify-content-center align-items-end'>
        <Col sm={12} md={12} lg={5} className='justify-self-end'>
          <div className='d-flex flex-column gap-3'>
            <p className='sub-heading'>What We Do</p>
            <h1 className='main-heading intro__sub__heading'>
              Brand and Marketing Agency
            </h1>
            <div className='d-flex flex-column gap-3 what-we-do-text'>
              <p>
                Creating a simple, clear and emotionally-compelling narrative,
                our approach brings clarity and meaning, motivates everyone in
                the organization to explore what the story means for their part
                of the business, and how they can all play their part.
              </p>
              <p>
                We are a dedicated team, offering a comprehensive approach to
                brand strategy, digital design, development, and online
                marketing. Our team chooses to work with brands that excite and
                inspire. Together, we are working to grow forward-thinking,
                relevant brands.
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6} className='py-0'>
          <div className='d-flex flex-column gap-3 what-we-do-text'>
            <p>
              We are a dedicated team, offering a comprehensive approach to
              brand strategy, digital design, development, and online marketing.
              Our team chooses to work with brands that excite and inspire.
              Together, we are working to grow forward-thinking, relevant
              brands.
            </p>
            <p>
              We work within many individuals, businesses, government and NGOs;
              both conventional and unconventional. Specialized in reaching mass
              market consumers.
            </p>
            <Link to='/services'>
              <FlatButton
                text='Our Services'
                bg='black'
                color='white'
                Icon={CgArrowLongRight}
              />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutIntro;
