import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import "./TwoColumnsLeft.css";

const TwoColumnsLeft = ({title, subtitle, leftBanner, desc, buttonText, buttonLink}) => {
  return (
    <Container fluid className='px-0'>
      <Row>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className='two-columns-left__img__container'
        >
          <Image src={leftBanner} className='two-columns-left__img' />
        </Col>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className='two-columns-left__content d-flex align-items-end'
        >
          <div className='two-columns-left__content__inner d-flex flex-column gap-3 align-items-end'>
            <div className='d-flex flex-column gap-1 align-items-end'>
              <p className='sub-heading text-uppercase'>{subtitle}</p>
              <h1 className='main-heading two-columns-left__heading text-end'>
                {title}
              </h1>
            </div>
            <p className='two-columns-left__text text-end'>
              {desc}
            </p>
            <Link to={buttonLink}>
              <FlatButton
                text={buttonText}
                bg='transparent'
                color='#171717'
                Icon={CgArrowLongRight}
                borderColour='#d2d2d2'
              />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnsLeft;
