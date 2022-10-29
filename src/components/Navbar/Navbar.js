import React, { Fragment, useId, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuIcon from "../MenuIcon/MenuIcon";
import "./Navbar.css";

import logo from "../../assets/img/logo-black.png";
// import logo from "../../assets/img/storywoxx.png";

const Navbar = () => {
  const id = useId();

  const [showNavLinks, setShowNavLinks] = useState(false);

  const onShowNavLinks = () => {
    setShowNavLinks(!showNavLinks);
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
      <Container fluid className='px-4 px-md-5 py-4 navbar__wrapper'>
        <header className='d-flex desktop-header justify-content-between align-items-center'>
          <div className='navlinks left__nav d-flex align-items-center justify-content-start'>
            <Link to='/' className='text-uppercase logo__text'>
              <Image src={logo} height={40} />
            </Link>
            {navLinks.map((link, index) => (
              <div key={`${id}-${index}`}>
                <Link to={link.link} className='nav__link'>
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
          <div className='d-flex align-items-center justify-content-end right__nav'>
            <MenuIcon className='nav__child' />
          </div>
        </header>

        {/* mobile menu  */}
        <header className='mobile-header'>
          <div className='mobile header d-flex align-items-center justify-content-between'>
            <h2 className='nav__child text-uppercase logo__text'>StoryWoxx</h2>
            <div
              className='d-flex align-items-center justify-content-end'
              onClick={onShowNavLinks}
            >
              <MenuIcon className='nav__child' />
            </div>
          </div>
          {showNavLinks && (
            <div className='mobile__menu d-flex mt-3'>
              {navLinks.map((link, index) => (
                <div key={`${id}-${index}`}>
                  <Link to={link.link} className='nav__link'>
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </header>
      </Container>
    </Fragment>
  );
};

export default Navbar;
