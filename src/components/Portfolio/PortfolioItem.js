import React, { useState } from "react";
import { Image } from "react-bootstrap";
import PortfolioDetailsModal from "../PortfolioDetailsModal/PortfolioDetailsModal";

import "./PortfolioItem.css";

const PortfolioItem = ({ item }) => {
  const [show, setShow] = useState(false);

  const onShowModal = () => {
    setShow(true);
  };

  const onHide = () => setShow(false);

  return (
    <div className='portfolio-item'>
      <div className='img-wrapper' onClick={() => setShow(true)}>
        <Image src={item.img} />
      </div>
      <div className='portfolio-item__texts d-flex flex-column mt-3 gap-1'>
        <h2>{item.title}</h2>
        <p className='text-uppercase'>{item.category}</p>
      </div>
      <PortfolioDetailsModal show={show} onHide={onHide} portfolio={item} />
    </div>
  );
};

export default PortfolioItem;
