import React from "react";
import { Image } from "react-bootstrap";
import "./ImageSliderItem.css";

const ImageSliderItem = ({ sliderItem }) => {
  return sliderItem.map((item) => (
    <div className='slider-img-box'>
      <Image fluid src={item.img} className='slider-img' />
      {/* <p className='slider-img-text text-uppercase p-3'>{item.text}</p> */}
    </div>
  ));
};

export default ImageSliderItem;
