import React, { useId } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import styled from "styled-components";
import "./SubHeader.css";
import RoundButton from "../../UIKit/Buttons/RoundButton";

const SubHeader = () => {
  const id = useId();

  const subHeaderItems = [
    {
      title: "Performance",
      text: "Risus quis varius quam quisque id diam vel quam elementum.",
      roundButtonLink: "/performance",
    },
    {
      title: "Accounting",
      text: "Risus quis varius quam quisque id diam vel quam elementum.",
      roundButtonLink: "/performance",
    },
    {
      title: "Planning",
      text: "Risus quis varius quam quisque id diam vel quam elementum.",
      roundButtonLink: "/performance",
      extraClass: "d-none d-lg-block",
    },
  ];
  return (
    <div className='py-5 subheader__container d-flex justify-content-center align-items-center bg-white'>
      <div className='d-flex flex-column flex-md-row gap-5 subheader__wrapper'>
        {subHeaderItems.map((item, index) => (
          <div
            className={`d-flex flex-column align-items-start gap-3 ${
              index === 2 && "d-none d-lg-flex"
            }`}
            key={`${id}-${index}`}
          >
            <h3>{item.title}</h3>
            <p className='subheader__text'>{item.text}</p>
            <RoundButton arrowColor='#000' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
