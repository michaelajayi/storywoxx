import React, { useId, useState } from "react";
import { Container } from "react-bootstrap";
import "./NavbarAlt.css";

import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuIcon from "../MenuIcon/MenuIcon";
import { Image } from "react-bootstrap";
import SideMenu from "../SideMenu/SideMenu";

import logo from "../../assets/img/logo-white.png";
import logoDark from "../../assets/img/logo-black.png";
import menuCloseWhite from "../../UIKit/Icons/hamburger-menu-close-light-icon.svg";
import menuCloseDark from "../../UIKit/Icons/hamburger-menu-close-icon.svg";

const NavbarAlt = ({ bgImage, pageTitle, breadcrumbs }) => {
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

  const [showNavLinks, setShowNavLinks] = useState(false);

  const [showMobileNav, setShowMobileNav] = useState(false);

  const onShowNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  return (
    <>
      <Container fluid className='navbar-alt-wrapper px-0 align-items-stretch'>
        <SideMenu isOpen={sideMenuVisible} hideSideMenu={setSideMenuVisible} />

        <div className='w-100 px-0'>
          <Image src={bgImage} className='bg__image' />
          <div className='navbar__contacts d-none d-md-flex justify-content-between px-2 py-2'>
            <div className='navbar__contacts__links d-flex justify-content-start align-items-center gap-4'>
              <a href='mailto:hi@storywoxx.com' className='py-0'>
                hi@storywoxx.com
              </a>
              <a href='tel:+234 123 456 7890' className='py-0'>
                +44(0) 7511 788638
              </a>
              <p className='py-0'>
                1 Mount Mascal, North Cray Road, Bexley DA5 3NH
              </p>
            </div>
            <div className='navbar__social__icons d-flex justify-content-start align-items-center gap-2'>
              <a href='twitter.com'>
                <FaTwitter size={12} />
              </a>
              <a href='facebook.com'>
                <FaFacebookF size={12} />
              </a>
              <a href='instagram.com/StoryWoxx'>
                <FaLinkedinIn size={12} />
              </a>
            </div>
          </div>
          <div className='navbar__header px-0 py-3'>
            <header className='d-flex desktop-header justify-content-between align-items-center'>
              <div className='navlinks left__nav d-flex align-items-center justify-content-start px-2'>
                <Link to='/' className='text-uppercase logo__text__alt'>
                  <Image src={logo} height={40} />
                </Link>
                {navLinks.map((link, index) => (
                  <div key={index}>
                    <Link to={link.link} className='nav__link__alt'>
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
                  color='#fff'
                />
              </div>
            </header>

            {/* mobile menu  */}
          </div>
          <div className='navbar__breadcrumb d-flex flex-column align-items-center justify-content-center gap-2 text-white'>
            <h1>{pageTitle}</h1>
            <p className='text-uppercase'>{breadcrumbs}</p>
          </div>
        </div>
      </Container>

      <Container fluid className='mobile-menu px-0'>
        <div className='mobile-menu__wrapper d-flex justify-content-between w-100 py-3 px-3 w-100'>
          <Link to='/' className='text-uppercase logo__text'>
            <Image src={logoDark} height={40} />
          </Link>
          {showMobileNav ? (
            <Image
              src={menuCloseDark}
              alt='menu-close-dark'
              onClick={() => setShowMobileNav(false)}
            />
          ) : (
            <MenuIcon
              onClick={() => setShowMobileNav(!showMobileNav)}
              color='#000'
            />
          )}
        </div>
        <div
          className={`mobile-navlinks px-3 py-2 ${
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
    </>
  );
};

export default NavbarAlt;
