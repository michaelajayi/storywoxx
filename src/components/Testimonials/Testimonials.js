import React from "react";
import { Container } from "react-bootstrap";
import WhatTheySay from "../WhatTheySay/WhatTheySay";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Container fluid className='testimonials__wrapper'>
      <div className='testimonials-wrapper d-flex flex-column align-items-start'>
        <p className='testimonials-sub-heading text-uppercase'>Who are We?</p>
        <h4 className='testimonials-heading'>
          StoryWoxx is a full service, brand and marketing agency
        </h4>
        <WhatTheySay />
      </div>
    </Container>
  );
};

export default Testimonials;
