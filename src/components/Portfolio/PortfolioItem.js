import React from "react";
import { Image } from "react-bootstrap";

import "./PortfolioItem.css";

const PortfolioItem = ({ item }) => {
  return (
    <div className='portfolio-item'>
      <div className='img-wrapper'>
        <Image src={item.img} />
      </div>
      <div className='portfolio-item__texts d-flex flex-column mt-3 gap-1'>
        <h2>{item.title}</h2>
        <p className='text-uppercase'>{item.category}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
