import React from "react";
import "./CircularProgressBar.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

const CircularProgressBar = ({ percent }) => {
  return (
    <div style={{ width: 150, height: 150 }}>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={75}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              strokeWidth={1}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathTransitionDuration: 0.5,
                textColor: "#171717",
                textSize: "14px",
                width: 50,
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
};

export default CircularProgressBar;
