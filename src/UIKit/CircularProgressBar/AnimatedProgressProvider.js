import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Fragment,
} from "react";
import { Animate } from "react-move";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedProgressProvider = (props) => {
  const { valueStart, valueEnd, duration, easingFunction } = props;

  const [isAnimated, setIsAnimated] = useState(false);

  const effectRan = useRef(false);

  useEffect(() => {
    setIsAnimated(!isAnimated);
    if (effectRan.current === false) {
      // console.log(`after setState ${isAnimated}`);
    }

    return () => {
      effectRan.current = true;
      // console.log("unmounting...");
    };
  }, []);

  return (
    // <VisibilitySensor>
    //   {({ isVisible }) =>
    //     isVisible
    //       ? console.log("i am visible")
    //       : console.log("i am invisible")
    //   }
    // </VisibilitySensor>
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => props.children(value)}
    </Animate>
  );
};

export default AnimatedProgressProvider;
