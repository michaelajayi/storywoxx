import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./DigitalExperience.css";

import digitalExperience from "../../assets/img/digital-experience.jpg";
import RoundButton from "../../UIKit/Buttons/RoundButton";

const DigitalExperience = () => {
  return (
    <Container fluid>
      <Row className='align-items-stretch'>
        <Col sm={12} lg={6} xl={6} className='digital-experience__img px-0'>
          <Image src={digitalExperience} />
        </Col>
        <Col
          sm={12}
          lg={6}
          xl={6}
          className='px-5 digital-experience__right px-0'
        >
          <div className='d-flex flex-column align-items-start justify-content-end py-5 gap-2'>
            <p className='sub-heading'>Brand and Marketing</p>
            <h2 className='main-heading digital-experience__heading'>
              Smarter, more effective digital assets
            </h2>
            <RoundButton arrowColor='#000' />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DigitalExperience;
