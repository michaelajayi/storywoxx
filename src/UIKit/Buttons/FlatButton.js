import React, { useEffect, useRef } from "react";
import { Button as BoostrapButton } from "react-bootstrap";
import "./FlatButton.css";
import gsap from "gsap";

import "./FlatButton.css";

const FlatButton = ({ text, bg, color, Icon, borderColour }) => {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.style.setProperty(
      "border",
      `1px solid ${borderColour}`,
      "important"
    );
  }, []);

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
      style={{
        background: bg,
        color: color,
      }}
      ref={buttonRef}
      className='px-5 py-4 default-button shadow-none border-0 rounded-0'
    >
      <div className='d-flex align-items-center justify-content-center gap-2'>
        <p className='flat-button__text'>{text}</p>
        {Icon && <Icon />}
      </div>
    </BoostrapButton>
  );
};

export default FlatButton;
