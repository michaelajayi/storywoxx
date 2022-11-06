import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import "./TwoColumnsRight.css";

const TwoColumnsRight = ({
  subtitle,
  title,
  rightBanner,
  desc,
  buttonLink,
  buttonText,
  buttonBg,
}) => {
  return (
    <Container fluid className='px-0'>
      <Row>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className='two-columns-right__content d-flex align-items-end'
        >
          <div className='two-columns-right__content__inner d-flex flex-column gap-3'>
            <div className='d-flex flex-column gap-1'>
              <p className='sub-heading text-uppercase'>{subtitle}</p>
              <h1 className='main-heading two-columns-right__heading'>
                {title}
              </h1>
            </div>
            <p className='two-columns-right__text'>{desc}</p>
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
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className='two-columns-right__img__container'
        >
          <Image src={rightBanner} className='two-columns-right__img' />
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnsRight;
