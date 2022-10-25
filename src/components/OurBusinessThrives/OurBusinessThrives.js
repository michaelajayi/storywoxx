import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./OurBusinessThrives.css";

import va from "../../assets/img/business-thrives-icons/va.png";
import cfe from "../../assets/img/business-thrives-icons/cfe.png";
import cube from "../../assets/img/business-thrives-icons/cube.png";
import globe from "../../assets/img/business-thrives-icons/globe.png";
import hDot from "../../assets/img/business-thrives-icons/h-dot.png";
import r from "../../assets/img/business-thrives-icons/r.png";

export default function OurBusinessThrives() {
  const businessThrivesItems = [
    {
      icon: va,
      title: "Think Big",
      text: "Let’s leave the simple behind. We aim to uncover the big idea and work together to identify what makes you different, and build around those factors. ",
    },
    {
      icon: globe,
      title: "Build Work We Believe In",
      text: "We aim to create unique offerings that act as a differentiator in your space. Be positively inspiring.",
    },
    {
      icon: r,
      title: "Establish Trust",
      text: "Focused on integrity in all we do and within our relationships.",
    },
    {
      icon: cube,
      title: "Be Authentic",
      text: "Everything has a story. Uncovering that story, and then clearly bring it forward and aligned with your brand promises. ",
    },
    {
      icon: hDot,
      title: "Move Fast",
      text: "Quick to respond through efficient action, centered on effectiveness and speed. ",
    },
    {
      icon: cfe,
      title: "Results Driven",
      text: "Identify growth opportunities and maintain flexibility and drive, to reach new marketing & brand goals.",
    },
  ];
  return (
    <Container
      fluid
      className='our-business-thrives d-flex justify-content-center align-items-center px-0'
    >
      <div className='d-flex our-business-thrives__wrapper d-flex flex-column'>
        <div className='d-flex flex-column our-business-thrives__heading gap-2'>
          <p className='sub__heading'>Our Business Thrives</p>
          <h2 className='main__heading w-50'>
            Our Core Features and Offerings
          </h2>
        </div>
        <Row className='our-business-thrives__highlights gx-5 gy-5'>
          {businessThrivesItems.map((item) => (
            <Col
              sm={12}
              lg={4}
              className='d-flex flex-column align-items-start gap-3'
            >
              <Image src={item.icon} />
              <h1 className='' style={{ fontSize: "25px" }}>
                {item.title}
              </h1>
              <p className='our-business-thrives__text'>{item.text}</p>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
