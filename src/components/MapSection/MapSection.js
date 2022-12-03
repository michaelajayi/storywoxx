import React from "react";
import { Container } from "react-bootstrap";

import "./MapSection.css";

const MapSection = () => {
  return (
    <Container
      fluid
      className='px-0 map-section-container px-3 px-md-5 py-4 py-md-5'
    >
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4974.718820720979!2d0.14585753215957298!3d51.43319304432949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ae712103fbdf%3A0xf3ae0780bfabef54!2sMount%20Mascal%20Stables!5e0!3m2!1sen!2sng!4v1670084916596!5m2!1sen!2sng'
        width='100%'
        height='550'
        border='0'
        z='10'
        allowFullScreen=''
        loading='lazy'
        title='London Office Map'
        className='map-section-iframe'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </Container>
  );
};

export default MapSection;
