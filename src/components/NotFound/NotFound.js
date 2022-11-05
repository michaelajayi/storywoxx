import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container
      fluid
      className='d-flex align-items-center justify-content-center vw-100 vh-100'
    >
      <h1 className='fw-bold text-danger'>Not Found!</h1>
    </Container>
  );
};

export default NotFound;
