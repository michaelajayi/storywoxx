import React from "react";
import { Image } from "react-bootstrap";
import "./WhatTheySayItem.css";

const WhatTheySayItem = ({ item }) => {
  return (
    <div className='what__they__say__box'>
      <div className='image-box'>
        <Image src={item.img} className='what__they__say__img' />
      </div>
      <div className='what__they__say__text text-uppercase p-3'>
        {item.text}
      </div>
    </div>
  );
};

export default WhatTheySayItem;
