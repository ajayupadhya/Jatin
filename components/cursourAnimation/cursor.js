"use client";

import React, { useContext, useState, useEffect } from "react";
import useMousePosition from "./index";
import { CursorContext } from "./cursorContext";
import styles from "./cursor.module.css";
const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);

  // const isTouchDevice =
  //   "ontouchstart" in window ||
  //   navigator.MaxTouchPoints > 0 ||
  //   navigator.msMaxTouchPoints > 0;

  useEffect(() => {
    // if (isTouchDevice) {
    //   return null;
    // } else {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.cursor}>
      {/* {cursor.active ? (
        <div
          className={styles.hoverOnImage}
          style={{
            left: clientX,
            top: clientY,

            opacity: isVisible && clientX > 1 ? 1 : 0,
          }}
        ></div>
      ) : ( */}
      <div
        style={{
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 1.5 : 1})`,
          transition: "transform .2s",
          opacity: isVisible && clientX > 1 ? 1 : 0,
          background: cursor.active ? "#fff" : "transparent",
        }}
        className={styles.cursorBackDrop}
      >
        <div className={styles.normalCursor}>
          <div className={styles.cursor_top}></div>
          <div className={styles.cursor_bottom}></div>
          <div className={styles.cursor_left}></div>
          <div className={styles.cursor_right}></div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Cursor;
