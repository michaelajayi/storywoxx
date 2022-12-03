import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MapSection from "../MapSection/MapSection";

import "./MapContainer.css";

const MapContainer = () => {
  return (
    <Container fluid className='bg-white px-0 py-5'>
      <Row>
        <Col lg-={6} sm={12} md={6} className='map-section'>
          <MapSection />
        </Col>
        <Col
          lg-={6} sm={12} md={6}
          className='d-flex align-items-center justify-content-center'
        >
          <div className='d-flex flex-column gap-3 meet-our-team'>
            <div className='d-flex flex-column'>
              <div className='sub-heading'>Step in the right direction</div>
              <div className='main-heading contact-item__main__heading'>
                Meet our team of experts creators in the London and Lagos Offices
              </div>
            </div>
            <div className='d-flex flex-column gap-1 map-container-links'>
              <div className='d-flex flex-column gap-3'>
                <div className='d-flex flex-column gap-1'>
                  <p className='contact-item__heading'>London Office:</p>
                  <p className='contact-item__address'>
                    1 Mount Mascal, North Cray Road, Bexley DA5 3NH
                  </p>
                  <a
                    href='tel:+234 802 450 0001'
                    className='contact-item__links'
                  >
                    +44(0) 7511 788638
                  </a>
                </div>
                <div className='d-flex flex-column gap-1 contact-item'>
                  <p className='contact-item__heading'>Lagos Office:</p>
                  <p className='contact-item__address'>
                    8 Dejo Adeleye Street, Abijo GRA, Lekki, Lagos
                  </p>
                  <a
                    href='tel:+234 802 450 0001'
                    className='contact-item__links'
                  >
                    +23(4) 8024 500001
                  </a>
                </div>

                <div className='d-flex flex-column gap-1'>
                  <p className='contact-item__heading'>Email:</p>
                  <a
                    href='mailto:hi@storywoxx.com'
                    className='contact-item__links'
                  >
                    hi@storywoxx.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MapContainer;
