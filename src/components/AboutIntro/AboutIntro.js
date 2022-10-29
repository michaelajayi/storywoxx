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
      <Row className='about-intro__row gap-5 justify-content-center align-items-center'>
        <Col sm={12} md={12} lg={4} className='justify-self-end'>
          <div className='d-flex flex-column gap-3'>
            <p className='sub__heading'>What We Do</p>
            <h1 className='main__heading intro__sub__heading'>
              Brand and Marketing Agency
            </h1>
            <Link to='/about-us'>
              <FlatButton
                text='View more'
                bg='black'
                color='white'
                Icon={CgArrowLongRight}
              />
            </Link>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <SliderText />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutIntro;
