import React from "react";
import { Container } from "react-bootstrap";
import "./ReviewItem.css";

const ReviewItem = ({ review }) => {
  return (
    <Container
      fluid
      className='d-flex flex-column align-items-center justify-content-center py-5 mt-5 review__container gap-3'
    >
      <h4 className='review__heading text-uppercase'>{review.heading}</h4>
      <h3 className='review__text text-center'>{review.text}</h3>
      <h6 className='review__author mt-2'>{`${review.author}`}</h6>
    </Container>
  );
};

export default ReviewItem;
