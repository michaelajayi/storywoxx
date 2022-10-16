import React, { useId } from "react";
import { Image } from "react-bootstrap";
import "./WhatTheySayItem.css";

const WhatTheySayItem = ({ item }) => {
  const id = useId();
  
  return (
    <div className='d-flex flex-column what__they__say__wrapper'>
      {item.map((inner, index) => (
        <div className='what__they__say__box' key={`${index}-${id}`}>
          <Image src={inner.img} className='what__they__say__img' />
          <div className='what__they__say__text text-uppercase p-3'>
            {inner.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatTheySayItem;
