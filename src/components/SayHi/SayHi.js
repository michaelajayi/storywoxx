import React from "react";
import { Container, Image, Form, Button, Row, Col } from "react-bootstrap";
import SayHiImage from "../../assets/img/say-hi.jpg";
import SayHiBanner from "../../assets/img/say-hi-banner.jpg";
import whiteArrow from "../../UIKit/Icons/white-arrow.svg";
import "./SayHi.css";

const SayHi = () => {
  return (
    <Container fluid className='px-0'>
      <Row>
        <Col lg={6} sm={12} xs={12} className='image__container px-0'>
          <Image
            src={SayHiImage}
            alt='sayhi__banner'
            className='say__hi__img'
          />
        </Col>
        <Col
          lg={6}
          sm={12}
          xs={12}
          className='say__hi__content d-flex align-items-center justify-content-center'
        >
          <Image src={SayHiBanner} alt='' />
          <div className='d-flex flex-column gap-5'>
            <div className='d-flex flex-column gap-2'>
              <p className='sub__heading'>Step in the right direction</p>
              <h1 className='w-75'>
                Don't be shy, please don't hesitate to say hi
              </h1>
            </div>
            <div className='say__hi__form'>
              <Form>
                <Form.Group className='mb-3' controlId='name'>
                  <Form.Control
                    type='text'
                    placeholder='Name'
                    className='bg-white shadow-none border-0 rounded-0 px-3 py-3 form__control'
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='email'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    className='bg-white shadow-none border-0 rounded-0 px-3 py-3 form__control'
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='message'>
                  <Form.Control
                    as='textarea'
                    rows={7}
                    placeholder='Message'
                    className='bg-white shadow-none border-0 rounded-0 px-3 py-3 form__control'
                  />
                </Form.Group>
                <Button
                  type='submit'
                  className='bg-dark shadow-none border-0 rounded-0 px-5 py-3 contact__submit__btn'
                >
                  <div className='d-flex align-items-center justify-content-center gap-2'>
                    <span>Send</span>
                    <Image src={whiteArrow} />
                  </div>
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SayHi;
