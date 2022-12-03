import React, { useId } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./AboutServices.css";

import think from "../../assets/img/business-thrives-icons/think.png";
import trust from "../../assets/img/business-thrives-icons/trust.png";
import authentic from "../../assets/img/business-thrives-icons/authentic.png";
import moveFast from "../../assets/img/business-thrives-icons/move-fast.png";
import resultsDriven from "../../assets/img/business-thrives-icons/results-driven.png";
import unique from "../../assets/img/business-thrives-icons/unique.png";
const AboutServices = () => {
  const id = useId();

  const featuredServices = [
    {
      heading: "Establish Trust",
      text: "Focused on integrity in all we do a	nd within our relationships.",
      icon: trust,
    },
    {
      heading: "Think Big",
      text: "Let’s leave the simple behind. We aim to uncover the big idea and work together to identify what makes you different, and build around those factors.",
      icon: think,
    },
    {
      heading: "Move Fast",
      text: "Quick to respond through efficient action, centered on effectiveness and speed.",
      icon: moveFast,
    },
    {
      heading: "Build Work We Believe In",
      text: "We aim to create unique offerings that act as a differentiator in your space. Be positively inspiring.",
      icon: authentic,
    },
    {
      heading: "Be Authentic",
      text: "Everything has a story. Uncovering that story, and then clearly bring it forward and aligned with your brand promises..",
      icon: unique,
    },
    {
      heading: "Results Driven",
      text: "Identify growth opportunities and maintain flexibility and drive, to reach new marketing & brand goals.",
      icon: resultsDriven,
    },
  ];
  return (
    <Container
      fluid
      className='services__container d-flex flex-column justify-content-center align-items-center bg-white'
    >
      <div className='services__wrapper d-flex flex-column justify-content-center align-items-center py-3'>
        <div className='services__heading d-flex flex-column align-items-center justify-content-center gap-2'>
          <p className='sub-heading text-center'>A Multi-Disciplinary Team</p>
          <h1 className='main-heading text-center'>
            Unlock Your Limitless Brand Potential
          </h1>
        </div>
        <div className='featured__services d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>
          <Row className='gx-3 gy-5'>
            {featuredServices.map((service, index) => (
              <Col sm={12} md={4} lg={4} key={index}>
                <div
                  className='d-flex flex-column align-items-center justify-content-center gap-2'
                  key={`${index}-${id}`}
                >
                  <Image src={service.icon} className='mb-3' />
                  <h4 className='services__sub__heading text-center'>
                    {service.heading}
                  </h4>
                  <p className='services__text text-center'>{service.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default AboutServices;
