import React, { Fragment, useId, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import MenuIcon from "../MenuIcon/MenuIcon";
import "./Navbar.css";

import { Link } from "react-router-dom";

// import logo from "../../assets/img/storywoxx.png";
import logo from "../../assets/img/logo-black.png";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const onShowMenu = () => {
    setMenuVisible(!menuVisible);
    // alert(`${menuVisible ? "menu visible" : "menu invisible"}`);
  };
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
        className='px-3 px-md-5 py-4 navbar__wrapper desktop-menu'
      >
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
      </Container>

      {/* mobile menu */}
      {/* <Container fluid className='mobile-menu px-2 py-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to='/'>
            <Image src={logo} height={40} />
          </Link>

          <Button
            variant='default'
            className='shadow-none border-0 text-small text-uppercase'
            onClick={onShowMenu}
          >
            menu
          </Button>
        </div>

        <div
          className={`mobile-menu__items d-${menuVisible ? "block" : "none"}`}
        >
          <div className='mobile__menu d-flex mt-3'>
            {navLinks.map((link, index) => (
              <div key={`${id}-${index}`}>
                <Link to={link.link} className='nav__link'>
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container> */}
    </Fragment>
  );
};

export default Navbar;
