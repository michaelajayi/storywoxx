import React from "react";
import { Container } from "react-bootstrap";
import RoundButton from "../../UIKit/Buttons/RoundButton";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <Container
      fluid
      className='subheader__container d-flex justify-content-evenly align-items-center d-none d-md-block'
    >
      <div className='subheader bg-white'>
        <div className='align-items-start gap-3'>
          <h4 className='subheading__header'>Systematic Approach</h4>
          <p className='subheading__text'>
            From product ideation to specialized marketing.
          </p>
          <RoundButton arrowColor='#000' />
        </div>
        <div className='align-items-start gap-3'>
          <h4 className='subheading__header'>Multi-Disciplinary Creators</h4>
          <p className='subheading__text'>
            Experienced marketers, strategists and developers.
          </p>
          <RoundButton arrowColor='#000' />
        </div>
        <div className='align-items-start gap-3 third-header-child'>
          <h4 className='subheading__header'>Extension of Your Team</h4>
          <p className='subheading__text'>
            We act as a true extension of your team.
          </p>
          <RoundButton arrowColor='#000' />
        </div>
      </div>
    </Container>
  );
};

export default SubHeader;
