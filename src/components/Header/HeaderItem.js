import React from "react";
import { Button, Container } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FlatButton from "../../UIKit/Buttons/FlatButton";
import SubHeader from "../SubHeader/SubHeader";
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
        className='header__wrapper d-flex flex-column justify-content-center align-items-center px-0'
        // style={{ gap: "10rem" }}
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
     <SubHeader />
      </Container>
    </BgImage>
  );
};

export default HeaderItem;
