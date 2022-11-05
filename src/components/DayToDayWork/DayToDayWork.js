import React, { useId } from "react";
import { Container, Image } from "react-bootstrap";
import design from "../../UIKit/Icons/design.svg";
import management from "../../UIKit/Icons/management.svg";
import progressbar from "../../UIKit/Icons/progressbar.svg";
import "./DayToDayWork.css";
import CircularProgressBar from "../../UIKit/CircularProgressBar/CircularProgressBar";

const DayToDayWork = () => {
  const id = useId();

  const dayToDayArray = [
    {
      heading: "Extension of Your Team",
      text: "We act as a true extension of your team, advancing business objectives, alongside your internal team.",
      icon: progressbar,
      percent: 88,
    },
    {
      heading: "Multi-Disciplinary Creators",
      text: "Our agency consists of experienced marketers, strategists, creatives and developers.",
      icon: management,
      percent: 95,
    },
    {
      heading: "Systematic Approach",
      text: "A comprehensive process which is segmented into phases and varied offerings.",
      icon: design,
      percent: 90,
    },
  ];
  return (
    <Container
      fluid
      className='dToday__container d-flex flex-column justify-content-center align-items-center bg-white'
    >
      <div className='dToday__wrapper d-flex flex-column justify-content-center align-items-center py-3'>
        <div className='dToday__heading d-flex flex-column align-items-center justify-content-center gap-2'>
          <p className='sub-heading text-center'>We are Unique</p>
          <h1 className='main-heading text-center'>Our Value Differentiator</h1>
          {/* <h1 className='main-heading text-center'>Made Simple and easy</h1> */}
        </div>
        <div className='featured__dToday d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 mt-4'>
          {dayToDayArray.map((dToday, index) => (
            <div
              className='d-flex flex-column align-items-center justify-content-center gap-2'
              key={`${index}-${id}`}
            >
              <CircularProgressBar percent={dToday.percent} />
              <h4 className='dToday__sub__heading text-center mt-3'>
                {dToday.heading}
              </h4>
              <p className='dToday__text text-center'>{dToday.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DayToDayWork;
