import React from "react";
import { Container } from "react-bootstrap";
import RoundButton from "../../UIKit/Buttons/RoundButton";
import "./Footer.css";

const Footer = () => {
  const onSubmit = () => console.log("form submitted!");

  return (
    <Container
      fluid
      className='pt-5 pb-2 d-flex align-items-center justify-content-center footer__container'
    >
      <div className='footer__wrapper d-flex flex-column justify-content-between gap-5'>
        <div className='our__brand d-flex flex-column flex-md-row align-items-baseline  align-items-md-center justify-content-between align-items-end'>
          <h1 className='text-light flex-grow-0 '>
            Perfect partner for success
          </h1>
          <div className='flex-grow-1'></div>
          <div className='flex-grow-1'></div>
          <form className='footer__form py-3 flex-grow-1 d-flex justify-content-between align-items-end'>
            <input
              type='email'
              placeholder='Email'
              className='email__input border-0 shadow-none'
            />
            <RoundButton arrowColor='#fff' />
          </form>
        </div>
        <div className='footer__sub d-flex flex-column flex-md-row align-items-baseline align-items-md-center justify-content-between gap-3'>
          <div className='footer__sub__col'>
            <h4 className='footer__sub__heading text-uppercase my-2'>
              Our Offices
            </h4>
            <ul className='text-light d-flex flex-column gap-1 px-0'>
              <li>London</li>
              <li>Paris</li>
              <li>Stockholm</li>
            </ul>
          </div>
          <div className='footer__sub__col'>
            <h4 className='footer__sub__heading text-uppercase my-2'>
              Help Center
            </h4>
            <ul className='text-light d-flex flex-column gap-1 px-0'>
              <li>FAQs</li>
              <li>Call Center</li>
              <li>Blog posts</li>
            </ul>
          </div>
          <div className='footer__sub__col'>
            <h4 className='footer__sub__heading text-uppercase my-2'>
              Follow Us
            </h4>
            <ul className='text-light d-flex flex-column gap-1 px-0'>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className='footer__sub__col'>
            <h4 className='footer__sub__heading text-uppercase my-2'>
              Contact Us
            </h4>
            <ul className='text-light d-flex flex-column gap-1 px-0'>
              <li>hi@storywoxx.com</li>
              <li>Ikoyi, Lagos Island</li>
              <li>+234 123 456 7890</li>
            </ul>
          </div>
        </div>
        <div className='copyright align-self-lg-center mt-5'>
          <p>&copy; 2022 Storywoxx All Rights Reserved</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
