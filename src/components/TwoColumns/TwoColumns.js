import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import "./TwoColumns.css";
import TwoColumnImg from "../../assets/img/two-column-img.jpg";

const TwoColumns = () => {
  return (
    <Container fluid className='px-0'>
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
              <p className='sub-heading text-uppercase'>Our Business Thrives</p>
              <h1 className='main-heading two-column__heading'>
                Unique & modern business tips for our clients
              </h1>
            </div>
            <p className='two-column__text'>
              StoryWoxx is a full service, brand and marketing agency that
              delivers smarter, more effective digital assets
            </p>
            <Link>
              <FlatButton
                text='Get started'
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
