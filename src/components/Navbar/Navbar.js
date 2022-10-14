import React, { useEffect, useLayoutEffect, useId, useState } from "react";
import { Container } from "react-bootstrap";
import MenuIcon from "../MenuIcon/MenuIcon";
import "./Navbar.css";

const Navbar = () => {
  const id = useId();

  const [showNavLinks, setShowNavLinks] = useState(false);

  const onShowNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const navLinks = [
    {
      title: "Home",
    },
    {
      title: "About Us",
    },
    {
      title: "What We Do",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Blog",
    },
    {
      title: "Contact",
    },
  ];

  return (
    <>
      <Container fluid className='px-4 px-md-5 py-4 navbar__wrapper'>
        <header className='d-flex desktop-header justify-content-between align-items-center'>
          <div className='navlinks left__nav d-flex align-items-center justify-content-start'>
            <h2 className='text-uppercase logo__text'>StoryWoxx</h2>
            {navLinks.map((link, index) => (
              <div key={`${id}-${index}`}>
                <p className='nav__link'>{link.title}</p>
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
                  <p className='nav__link'>{link.title}</p>
                </div>
              ))}
            </div>
          )}
        </header>
      </Container>
    </>
  );
};

export default Navbar;
