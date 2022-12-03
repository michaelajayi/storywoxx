import React from "react";

const WebDevelopmentSliderItem = ({ item }) => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center text-center gap-3'>
      <h1 className='main-heading web-development__title'>{item.title}</h1>
      <p className='first-paragraph'>{item.paragraphOne}</p>
      <p className='second-paragraph'>{item.paragraphTwo}</p>
    </div>
  );
};

export default WebDevelopmentSliderItem;
