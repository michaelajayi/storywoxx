import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./OurBusinessThrives.css";

import think from "../../assets/img/business-thrives-icons/think.png";
import trust from "../../assets/img/business-thrives-icons/trust.png";
import authentic from "../../assets/img/business-thrives-icons/authentic.png";
import moveFast from "../../assets/img/business-thrives-icons/move-fast.png";
import resultsDriven from "../../assets/img/business-thrives-icons/results-driven.png";
import unique from '../../assets/img/business-thrives-icons/unique.png';

export default function OurBusinessThrives() {
  const businessThrivesItems = [
    {
      icon: think,
      title: "Think Big",
      text: "Let’s leave the simple behind. We aim to uncover the big idea and work together to identify what makes you different, and build around those factors. ",
    },
    {
      icon: unique,
      title: "Build Work We Believe In",
      text: "We aim to create unique offerings that act as a differentiator in your space. Be positively inspiring.",
    },
    {
      icon: trust,
      title: "Establish Trust",
      text: "Focused on integrity in all we do and within our relationships.",
    },
    {
      icon: authentic,
      title: "Be Authentic",
      text: "Everything has a story. Uncovering that story, and then clearly bring it forward and aligned with your brand promises. ",
    },
    {
      icon: moveFast,
      title: "Move Fast",
      text: "Quick to respond through efficient action, centered on effectiveness and speed. ",
    },
    {
      icon: resultsDriven,
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
          <p className='sub-heading'>Our Business Thrives</p>
          <h2 className='main-heading w-50'>Our Core Features and Offerings</h2>
        </div>
        <Row className='our-business-thrives__highlights gx-5 gy-5'>
          {businessThrivesItems.map((item, index) => (
            <Col
              sm={12}
              lg={4}
              className='d-flex flex-column align-items-start gap-3'
              key={index}
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
