import React from "react";

import { Image } from "react-bootstrap";
import lineImg from "../../assets/img/h2-line-img.png";

import "./SliderTextItem.css";

const SliderTextItem = ({ item }) => {
  return (
    <div className='d-flex flex-column gap-4'>
      <p className='intro-text'>{item.text}</p>
      <div className='intro-caption d-flex align-items-center gap-2'>
        <Image src={lineImg} />
        <p>{item.caption}</p>
      </div>
    </div>
  );
};

export default SliderTextItem;
