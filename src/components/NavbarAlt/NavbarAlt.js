import React, { useId, useState } from "react";
import { Container } from "react-bootstrap";
import "./NavbarAlt.css";

import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuIcon from "../MenuIcon/MenuIcon";
import { Image } from "react-bootstrap";

import logo from "../../assets/img/logo-white.png";

const NavbarAlt = ({ bgImage, pageTitle, breadcrumbs }) => {
  const id = useId();

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

  const [showNavLinks, setShowNavLinks] = useState(false);

  const onShowNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  return (
    <Container
      fluid
      className='navbar__alt__wrapper px-0 d-flex flex-column align-items-stretch'
    >
      <Image src={bgImage} className='bg__image' />
      <div className='navbar__contacts d-none d-md-flex justify-content-between px-5 py-2'>
        <div className='navbar__contacts__links d-flex justify-content-start align-items-center gap-4'>
          <a href='mailto:hi@storywoxx.com' className='py-0'>
            hi@storywoxx.com
          </a>
          <a href='tel:+234 123 456 7890' className='py-0'>
            +234 123 456 7890
          </a>
          <p className='py-0'>8 Dejo Adeleye Street, Abijo GRA, Lekki</p>
        </div>
        <div className='navbar__social__icons d-flex justify-content-start align-items-center gap-2'>
          <a href='twitter.com'>
            <FaTwitter size={12} />
          </a>
          <a href='facebook.com'>
            <FaFacebookF size={12} />
          </a>
          <a href='linkedin.com'>
            <FaLinkedinIn size={12} />
          </a>
        </div>
      </div>
      <div className='navbar__header px-5 py-4'>
        <header className='d-flex desktop-header justify-content-between align-items-center'>
          <div className='navlinks left__nav d-flex align-items-center justify-content-start'>
            <Link to='/' className='text-uppercase logo__text__alt'>
              <Image src={logo} height={40} />
            </Link>
            {navLinks.map((link, index) => (
              <div key={`${id}-${index}`}>
                <Link to={link.link} className='nav__link__alt'>
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
          <div className='d-flex align-items-center justify-content-end right__nav'>
            <MenuIcon className='nav__child' color='#fff' />
          </div>
        </header>

        {/* mobile menu  */}
        <header className='mobile-header'>
          <div className='mobile header d-flex align-items-center justify-content-between'>
             <Link to='/' className='text-uppercase logo__text'>
              <Image src={logo} height={40} />
            </Link>
            <div
              className='d-flex align-items-center justify-content-end'
              onClick={onShowNavLinks}
            >
              <MenuIcon className='nav__child' color='#fff' />
            </div>
          </div>
          {showNavLinks && (
            <div className='mobile__menu d-flex mt-3'>
              {navLinks.map((link, index) => (
                <div key={`${id}-${index}`}>
                  <Link to={link.link} className='nav__link__alt'>
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </header>
      </div>
      <div className='navbar__breadcrumb d-flex flex-column align-items-center justify-content-center gap-2 text-white'>
        <h1>{pageTitle}</h1>
        <p className='text-uppercase'>{breadcrumbs}</p>
      </div>
    </Container>
  );
};

export default NavbarAlt;
