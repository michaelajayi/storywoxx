import React, { useLayoutEffect, useRef } from "react";
import "./RoundButton.css";
import gsap from "gsap";

const RoundButton = ({ arrowColor, buttonColor }) => {
  const buttonRef = useRef();
  const iconRef = useRef();

  // const tl = gsap.timeline({
  //   defaults: { duration: 0.3, ease: "none", paused: true },
  // });

  // useLayoutEffect(() => {
  //   tl.from(iconRef.current, {
  //     x: 100,
  //     opacity: 0,
  //   });
  // }, [tl]);

  // const onMouseEnterHandler = () => {
  //   tl.play();
  // };

  // const onMouseLeaveHandler = () => {
  //   tl.reverse();
  // };

  return (
    <div className='round__button'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='36'
        height='7'
        viewBox='0 0 36 7'
        className='round__button__arrow'
      >
        <line
          x1='30'
          stroke={arrowColor}
          transform='translate(0 3.5)'
          strokeWidth='1'
        ></line>
        <path
          d='M3.5,0,7,6H0Z'
          stroke={arrowColor}
          fill={arrowColor}
          transform='translate(36) rotate(90)'
        ></path>
      </svg>
    </div>
  );
};

export default RoundButton;
