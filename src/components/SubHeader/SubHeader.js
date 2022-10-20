import React, { useId } from "react";
import RoundButton from "../../UIKit/Buttons/RoundButton";
import "./SubHeader.css";

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
    <div className='subheader__container d-flex justify-content-evenly align-items-center bg-white'>
      <div className='subheader__wrapper d-flex'>
        {subHeaderItems.map((item, index) => (
          <div
            className={`d-flex flex-column align-items-start subheader__sub gap-3 ${
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
