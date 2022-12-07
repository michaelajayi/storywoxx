import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import "./TwoColumnsLeft.css";

const TwoColumnsLeft = ({
  title,
  subtitle,
  leftBanner,
  desc,
  buttonText,
  buttonLink,
  services,
}) => {
  return (
    <Container fluid className='px-0'>
      <Row className='two-columns__left'>
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
          className='two-columns-left__content d-flex'
        >
          <div className='two-columns-left__content__inner d-flex flex-column gap-3'>
            <div className='d-flex flex-column gap-1 two-columns-text__div'>
              <p className='sub-heading text-uppercase'>{subtitle}</p>
              <h1 className='main-heading two-columns-left__heading'>
                {title}
              </h1>
            </div>
            <p className='two-columns-left__text'>{desc}</p>
            {/* Services breakdown */}
            <ul className='d-flex flex-column gap-1 service-services service-services-left'>
              {services && services.map((service) => <li>{service}</li>)}
            </ul>
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
