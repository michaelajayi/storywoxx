import React from "react";
import { Container } from "react-bootstrap";

import "./MapSection.css";

const MapSection = () => {
  return (
    <Container fluid className='px-0 map-section-container px-5 py-5'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7929.047336720767!2d3.6703133453044674!3d6.455132134990482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfec6f101a649%3A0xb99e96809a21812f!2sAbijo%20G.R.A%2C%20105101%2C%20Lekki!5e0!3m2!1sen!2sng!4v1666180568572!5m2!1sen!2sng'
        width='100%'
        height='550'
        border='0'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='maps'
        className='map-section-iframe'
      ></iframe>
    </Container>
  );
};

export default MapSection;
