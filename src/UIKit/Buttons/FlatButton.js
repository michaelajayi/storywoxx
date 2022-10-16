import React, { useLayoutEffect, useRef } from "react";
import { Button as BoostrapButton } from "react-bootstrap";
import "./FlatButton.css";
import gsap from "gsap";

const FlatButton = ({ text, bg, color, Icon }) => {
  // const buttonRef = useRef();
  // const iconRef = useRef();

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
    <BoostrapButton
      style={{ background: bg, color: color }}
      className='px-5 py-4 default-button shadow-none border-0 rounded-0'
    >
      <div className='d-flex align-items-center justify-content-center gap-2'>
        {text}
        {Icon && <Icon />}
      </div>
    </BoostrapButton>
  );
};

export default FlatButton;
