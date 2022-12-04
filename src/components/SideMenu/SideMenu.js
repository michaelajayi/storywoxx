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
            Elevate Your Business Sith
          </p>
          <h1 className='main-heading sidemenu-main-heading'>Valiance Theme</h1>
        </div>
        <p className='sidemenu-text'>
          Limitless customization options & Elementor compatibility let anyone
          create a beautiful website with Valiance.
        </p>
        <Link to='somewhere'>
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
            valiance@qodeinteractive.com
          </a>
          <p className='sidemenu-contact__item'>
            Maria-Theresien-Platz, 1010 Wien
          </p>
          <a
            href='phone:156-677-124-442-2887'
            className='sidemenu-contact__item sidemenu-link'
          >
            156-677-124-442-2887
          </a>
        </div>
      </div>
    </Container>
  );
};

export default SideMenu;
