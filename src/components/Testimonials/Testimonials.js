import React from "react";
import { Container } from "react-bootstrap";
import WhatTheySay from "../WhatTheySay/WhatTheySay";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Container fluid className='testimonials__wrapper'>
      <div className='testimonials-wrapper d-flex flex-column align-items-start'>
        <p className='testimonials-sub__heading text-uppercase'>
          What they say
        </p>
        <h4 className='testimonials-heading'>
          Modern advisory services devised for companies & businesses both big
          and small
        </h4>
        <WhatTheySay />
      </div>
    </Container>
  );
};

export default Testimonials;
