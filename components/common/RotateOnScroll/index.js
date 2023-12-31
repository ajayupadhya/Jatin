import React, { useEffect, useRef } from "react";
import style from "./index.module.css";
import CircleType from "circletype";
import { raleway_display } from "@/app/fonts";
const RotateOnScroll = () => {
  const circleInstance = useRef();

  useEffect(() => {
    const text = circleInstance.current;
    new CircleType(circleInstance.current).radius(73);
    window.addEventListener("scroll", function () {
      text.style.transform = `rotate(${window.scrollY * 0.35}deg)`;
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.circular_text} ref={circleInstance}>
        <p className={raleway_display.className}>Available for work • from OCT 2022 •</p>
        
      </div>
      <div className={style.circle}></div>
    </div>
  );
};

export default RotateOnScroll;
