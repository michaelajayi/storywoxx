import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import RoundButton from "../../UIKit/Buttons/RoundButton";
import "./Footer.css";

const Footer = () => {
  const onSubmit = () => console.log("form submitted!");

  return (
    <Container
      fluid
      className='pt-5 pb-2 d-flex align-items-center justify-content-between justify-content-md-center footer__container'
    >
      <div className='footer__wrapper d-flex flex-column justify-content-between gap-5'>
        <div className='our__brand d-flex flex-column flex-md-row align-items-baseline  align-items-md-center justify-content-between align-items-end'>
          <h1 className='text-light'>Perfect partner for success</h1>
          <form className='footer__form py-3 d-flex justify-content-between align-items-end'>
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
            <h4 className='footer__sub__heading text-uppercase my-2'>PAGES</h4>
            <ul className='text-light d-flex flex-column gap-2 px-0'>
              <li>
                <Link to='/about-us'>About Us</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/portfolio'>Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className='footer__sub__col'>
            <h4 className='footer__sub__heading text-uppercase my-2'>
              Follow Us
            </h4>
            <ul className='text-light d-flex flex-column gap-2 px-0'>
              <li>
                <a href='twitter.com'>Twitter</a>
              </li>
              <li>
                <a href='#!'>Facebook</a>
              </li>
              <li>
                <a href='instagram.com/StoryWoxx'>Instagram</a>
              </li>
            </ul>
          </div>
          <div className='footer__sub__col'>
            <h4 className='footer__sub__heading text-uppercase my-2'>Lagos</h4>
            <ul className='text-light d-flex flex-column gap-2 px-0'>
              <li>hi@storywoxx.com</li>
              <li>8 Dejo Adeleye Street, Abijo GRA, Lekki</li>
              <li>+234 123 456 7890</li>
            </ul>
          </div>
          <div className='footer__sub__col'>
            <h4 className='footer__sub__heading text-uppercase my-2'>London</h4>
            <ul className='text-light d-flex flex-column gap-2 px-0'>
              <li>hi@storywoxx.com</li>
              <li>1 Mount Mascal, North Cray Road, Bexley DA5 3NH</li>
              <li>+44(0) 7511 788638</li>
            </ul>
          </div>
        </div>
        <div className='copyright align-self-lg-center mt-5'>
          <p>&copy; {new Date().getFullYear()} Storywoxx All Rights Reserved</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
