import React from "react";
import { Image } from "react-bootstrap";
import "./WhatTheySayItem.css";

const WhatTheySayItem = ({ item }) => {
  return (
    <div className='what__they__say__box'>
      <Image src={item.img} className='what__they__say__img' />
      <div className='what__they__say__text text-uppercase p-3'>
        {item.text}
      </div>
    </div>
  );
};

export default WhatTheySayItem;
