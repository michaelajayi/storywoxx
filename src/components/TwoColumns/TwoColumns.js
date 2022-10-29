import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import "./TwoColumns.css";
import TwoColumnImg from "../../assets/img/two-column-img.jpg";

const TwoColumns = () => {
  return (
    <Container fluid className='bg-warning px-0'>
      <Row>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className='two-column__content d-flex align-items-end'
        >
          <div className='two-column__content__inner d-flex flex-column gap-3'>
            <div className='d-flex flex-column gap-1'>
              <p className='sub__heading text-uppercase'>
                Our Business Thrives
              </p>
              <h1 className='main__heading two-column__heading'>
                Unique & modern business tips for our clients
              </h1>
            </div>
            <p className='two-column__text'>
              Neque volutpat ac tincidunt vitae semper quis lectus nulla at.
              Nibh nisl id venenatis a condimentum. Libero justo laoreet sit
              amet. Nisl nisi scelerisque eu ultrices vitae. Dolor sit amet
              consectetur adipiscing elit pellentesque.
            </p>
            <Link>
              <FlatButton
                text='View more'
                bg='transparent'
                color='#171717'
                Icon={CgArrowLongRight}
                borderColour='#d2d2d2'
              />
            </Link>
          </div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className='two-column__img__container'
        >
          <Image src={TwoColumnImg} className='two-column__img' />
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumns;
