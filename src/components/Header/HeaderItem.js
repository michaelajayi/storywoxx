import React from "react";
import { Container } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import styled from "styled-components";
import FlatButton from "../../UIKit/Buttons/FlatButton";

import "./HeaderItem.css";

const HeaderItem = ({ item }) => {
  const BgImage = styled.div`
    & {
      width: 100vw;
      height: 92vh;
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
      height: 92vh;
      z-index: -99;
    }
  `;
  return (
    <BgImage>
      <Container
        fluid
        className='header__wrapper d-flex justify-content-center align-items-start'
      >
        <div className='header__content px-1 px-lg-5 d-flex flex-column align-items-center justify-content-center text-center gap-4'>
          <p className='text-uppercase header-small text-light'>{item.small}</p>
          <h1 className='header-text text-center text-light'>{item.title}</h1>
          <FlatButton
            text={item.buttonText}
            bg='white'
            color='black'
            Icon={CgArrowLongRight}
          />
        </div>
      </Container>
    </BgImage>
  );
};

export default HeaderItem;
