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
      heading: "Branding",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: progressbar,
    },
    {
      heading: "Manage",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: management,
    },
    {
      heading: "Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: design,
    },
  ];
  return (
    <Container
      fluid
      className='dToday__container d-flex flex-column justify-content-center align-items-center bg-white'
    >
      <div className='dToday__wrapper d-flex flex-column justify-content-center align-items-center py-3'>
        <div className='dToday__heading d-flex flex-column align-items-center justify-content-center gap-2'>
          <p className='sub__heading text-center'>Our Business</p>
          <h1 className='main__heading text-center'>Day-to-day Work</h1>
          <h1 className='main__heading text-center'>Made Simple and easy</h1>
        </div>
        <div className='featured__dToday d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 mt-4'>
          {dayToDayArray.map((dToday, index) => (
            <div
              className='d-flex flex-column align-items-center justify-content-center gap-2'
              key={`${index}-${id}`}
            >
              <CircularProgressBar percent={75} />
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
