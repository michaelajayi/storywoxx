import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import "./AboutIntro.css";
import lineImg from "../../assets/img/h2-line-img.png";

const AboutIntro = () => {
  return (
    <Container
      fluid
      className='bg-white px-0 d-flex align-items-center justify-content-center'
    >
      <Row className='about-intro__row gap-5 justify-content-center align-items-center'>
        <Col sm={12} md={12} lg={4} className='justify-self-end'>
          <div className='d-flex flex-column gap-3'>
            <p className='sub__heading'>Our Business Thrives</p>
            <h1 className='main__heading intro__sub__heading'>
              Make your business boom
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
          <div className='d-flex flex-column gap-4'>
            <p className='intro-text'>
              Neque volutpat ac tincidunt vitae semper quis lectus nulla at.
              Nibh nisl id venenatis a condimentum. Libero justo laoreet sit
              amet. Nisl nisi scelerisque eu ultrices vitae. Dolor sit amet
              consectetur adipiscing elit pellentesque. Phasellus egestas tellus
              rutrum tellus pellentesque eu. Sagittis purus sit amet volutpat.
              Sed ullamcorper morbi tincidunt ornare massa potenti nullam ac
              tortor vitae purus. faucibus ornare suspendisse. Donec enim diam
              vulputate ut pharetra sit amet aliquam id. Eu mi bibendum neque
              egestas congue purus non enim praesent.
            </p>
            <div className='intro-caption d-flex align-items-center gap-2'>
              <Image src={lineImg} />
              <p>Amet Volutpat, sagittis purus sit</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutIntro;
