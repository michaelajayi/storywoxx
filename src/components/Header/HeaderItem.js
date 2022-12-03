import React from "react";
import { Button, Container } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FlatButton from "../../UIKit/Buttons/FlatButton";
import RoundButton from "../../UIKit/Buttons/RoundButton";

import "./HeaderItem.css";

const HeaderItem = ({ item }) => {
  const BgImage = styled.div`
    & {
      width: 100vw;
      height: 100vh;
      position: relative;
      display: grid;
    }

    &:after {
      content: "";
      position: absolute;
      background-image: url(${item.bg});
      filter: brightness(1);
      background-position: center;
      background-repeat: no-repeat;
      object-fit: cover;
      width: 100vw;
      height: 100vh;
      z-index: -99;
    }
  `;
  return (
    <BgImage>
      <Container
        fluid
        className='header__wrapper d-flex flex-column justify-content-end align-items-start px-0'
        style={{ gap: "10rem" }}
      >
        <div className='header__content d-flex flex-column align-items-center justify-content-center text-center gap-2'>
          <p className='text-uppercase header-small text-light'>{item.small}</p>
          <h1 className='header-text text-center text-light'>{item.title}</h1>
          <Link to={item.buttonUrl}>
            <FlatButton
              text={item.buttonText}
              bg='white'
              color='black'
              Icon={CgArrowLongRight}
            />
          </Link>
        </div>
        <div className='subheader bg-white d-flex flex-column flex-md-row justify-content-around gap-5'>
          <div className='d-flex flex-column align-items-start gap-3'>
            <h4 className='subheading__header'>Systematic Approach</h4>
            <p className='subheading__text'>
              A comprehensive process which is segmented into phases and varied
              offerings. From product ideation to specialized marketing.
            </p>
            <RoundButton arrowColor='#000' />
          </div>
          <div className='d-flex flex-column align-items-start gap-3'>
            <h4 className='subheading__header'>Multi-Disciplinary Creators</h4>
            <p className='subheading__text'>
              Our agency consists of experienced marketers, strategists,
              creatives and developers.
            </p>
            <RoundButton arrowColor='#000' />
          </div>
          <div className='d-flex flex-column align-items-start gap-3'>
            <h4 className='subheading__header'>Extension of Your Team</h4>
            <p className='subheading__text'>
              Our agency consists of experienced marketers, strategists,
              creatives and developers.
            </p>
            <RoundButton arrowColor='#000' />
          </div>
        </div>
      </Container>
    </BgImage>
  );
};

export default HeaderItem;
