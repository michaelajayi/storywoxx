import React from "react";
import { Container, Image } from "react-bootstrap";
import RoundButton from "../../UIKit/Buttons/RoundButton";
import { Link } from "react-router-dom";

import "./SideMenu.css";

import menuCloseWhite from "../../UIKit/Icons/hamburger-menu-close-light-icon.svg";

const SideMenu = ({ isOpen, hideSideMenu }) => {
  return (
    <Container
      className={`sidemenu-container d-flex flex-column justify-content-between ${
        isOpen ? "sidemenu-container-open" : "sidemenu-container-closed"
      }`}
    >
      <Image
        src={menuCloseWhite}
        className='menu-close-icon'
        onClick={() => hideSideMenu(false)}
      />
      <div className='top-section d-flex flex-column align-items-start gap-3'>
        <div className='sidemenu-headings'>
          <p className='sub-heading sidemenu-subheading'>
            Brand Marketing Agency
          </p>
          <h1 className='main-heading sidemenu-main-heading'>StoryWoxx</h1>
        </div>
        <p className='sidemenu-text'>
          StoryWoxx is a full service, brand and marketing agency that delivers
          smarter, more effective digital assets
        </p>
        <Link to='/about-us'>
          <RoundButton arrowColor='#fff' />
        </Link>
      </div>
      <div className='bottom-section d-flex flex-column gap-2'>
        <p className='sub-heading sidemenu-subheading'>Contact Us</p>
        <div className='sidemenu-contact d-flex flex-column gap-2'>
          <a
            href='mailto:valiance@qodeinteractive.com'
            className='sidemenu-contact__item sidemenu-link'
          >
            hi@storywoxx.com
          </a>
          <p className='sidemenu-contact__item'>
            1 Mount Mascal, North Cray Road, Bexley DA5 3NH
          </p>
          <a
            href='phone:156-677-124-442-2887'
            className='sidemenu-contact__item sidemenu-link'
          >
            +44(0) 7511 788638
          </a>
        </div>
      </div>
    </Container>
  );
};

export default SideMenu;
