import React, { Fragment, useId, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import MenuIcon from "../MenuIcon/MenuIcon";
import "./Navbar.css";

import { Link } from "react-router-dom";

// import logo from "../../assets/img/storywoxx.png";
import logo from "../../assets/img/logo-black.png";
import SideMenu from "../SideMenu/SideMenu";

import menuCloseWhite from "../../UIKit/Icons/hamburger-menu-close-icon.svg";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const onChangeSideMenu = () => {
    setSideMenuVisible(!sideMenuVisible);
  };

  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <Fragment>
      {/* desktop menu */}
      <Container
        fluid
        className='px-0 px-md-3 py-4 navbar__wrapper desktop-menu'
      >
        <SideMenu isOpen={sideMenuVisible} hideSideMenu={setSideMenuVisible} />
        <header className='desktop-header d-flex justify-content-between w-100'>
          <div className='navlinks left__nav d-flex align-items-center justify-content-start'>
            <Link to='/' className='text-uppercase logo__text'>
              <Image src={logo} height={40} />
            </Link>
            {navLinks.map((link, index) => (
              <div key={index}>
                <Link to={link.link} className='nav__link'>
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
          <div className='d-flex align-items-center justify-content-end right__nav'>
            <MenuIcon
              className='nav__child'
              onClick={onChangeSideMenu}
              setSideMenuVisible={setSideMenuVisible}
            />
          </div>
        </header>
      </Container>

      {/* mobile menu */}
      <Container
        fluid
        className='mobile-menu px-0 bg-white px-0'
      >
        <div className='mobile-menu__wrapper d-flex justify-content-between w-100 py-3 px-3 bg-white'>
          <Link to='/' className='text-uppercase logo__text'>
            <Image src={logo} height={40} />
          </Link>
          {showMobileNav ? (
            <Image
              src={menuCloseWhite}
              alt='menu-close-white'
              onClick={() => setShowMobileNav(false)}
            />
          ) : (
            <MenuIcon onClick={() => setShowMobileNav(!showMobileNav)} />
          )}
        </div>
        <div
          className={`mobile-navlinks bg-white px-3 py-2 ${
            showMobileNav ? "mobile-nav-shown" : "mobile-nav-hidden"
          }`}
        >
          {navLinks.map((link, index) => (
            <div key={index}>
              <Link to={link.link} className='nav__link'>
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default Navbar;
