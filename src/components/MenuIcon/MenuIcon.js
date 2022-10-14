import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import "./MenuIcon.css";

const MenuIcon = () => {
  const menuIconsRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const middleRef = useRef();

  const Line = styled.div`
    width: 2rem;
    border-top: 1px solid black;
  `;

  const tl = gsap.timeline({
    defaults: { duration: 0.3, ease: "none" },
    paused: true,
  });

  useLayoutEffect(() => {
    tl.to([topRef.current, bottomRef.current], {
      x: -25,
    }).to(
      middleRef.current,
      {
        x: 5,
      },
      "<"
    );
  }, [tl]);

  const onMouseEnterHandler = () => {
    tl.play();
  };

  const onMouseLeaveHandler = () => {
    tl.reverse();
  };

  return (
    <div
      className='menu-closed d-flex align-items-center justify-content-center flex-column'
      ref={menuIconsRef}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <Line className='top' ref={topRef} />
      <Line className='align-self-start middle' ref={middleRef} />
      <Line className='bottom' ref={bottomRef} />
    </div>
  );
};

export default MenuIcon;
