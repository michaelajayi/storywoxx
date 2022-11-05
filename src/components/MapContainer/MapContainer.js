import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MapSection from "../MapSection/MapSection";

import "./MapContainer.css";

const MapContainer = () => {
  return (
    <Container fluid className='bg-white px-0 py-5'>
      <Row>
        <Col lg-={6} className='map-section'>
          <MapSection />
        </Col>
        <Col
          lg-={6}
          className='d-flex align-items-center justify-content-center'
        >
          <div className='d-flex flex-column gap-3 meet-our-team'>
            <div className='d-flex flex-column'>
              <div className='sub-heading'>Step in the right direction</div>
              <div className='main-heading w-75'>
                Meet our team of experts creators in the Lagos Office
              </div>
            </div>
            <div className='d-flex flex-column gap-1 map-container-links'>
              <a href='mailto:hi@storywoxx.com'>hi@storywoxx.com</a>
              <a href='#'>8 Dejo Adeleye Street, Abijo GRA, Lekki, Lagos</a>
              <a href='tel:+234 802 450 0001'>+234 802 450 0001</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MapContainer;
