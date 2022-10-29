import React from "react";
import { Image } from "react-bootstrap";

import "./PortfolioItem.css";

const PortfolioItem = ({ item }) => {
  return (
    <div className='portolio-item'>
      <Image src={item.img} />
      <div className='portfolio-item__texts d-flex flex-column mt-3 gap-1'>
        <h2>{item.title}</h2>
        <p className='text-uppercase'>{item.category}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
