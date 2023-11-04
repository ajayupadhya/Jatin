"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import LoaderImage from "../../Images/indiaGate.svg";
import { raleway_display } from "@/app/fonts";
import Jatin from "../../Images/jatin.png";
import { UseCursorHandlers } from "../cursourAnimation/cursorHandler";
const LoadScreen = ({ loaderChange }) => {
  const cursorHandlers = UseCursorHandlers();
  const [count, setCount] = useState(0);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);


  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);

 



  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          loaderChange(false);
          return prevCount;
        }

        return prevCount + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Rotate and scale up after 1 second
    setTimeout(() => {
      setRotate(180);
      setScale(200);

      // Reset to original size after 2 seconds (1 second rotation + 1 second scaling)
      setTimeout(() => {
        setScale(1);
      }, 1000); // Start the reset after 2 seconds
    }, 1);
  }, []);

  const handleClickScroll = () => {
    //
    window.scrollBy(0, window.innerHeight + 100);
  };

  return (
    <>
      {/* <div
        className={`${styles.loaderScreen}  ${
          count === 100 && styles.animate_loader
        }`}
      >
        <div className={styles.loaderBackground}></div>
        <progress max={100} value={count} />

        <div className={styles.LoaderCounterContainer}>
          <div className={styles.LoaderImageContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="#000"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60 20L50 20L50 60L50 80L30 80L20 80L20 60L30 60L30 20L30 1.08876e-05L50 1.26361e-05L60 1.35103e-05L60 20ZM60 20L80 20L80 40L60 40L60 20ZM20 60L20 40L3.49691e-06 40L1.74846e-06 60L20 60Z"
                fill="#fff"
              />
            </svg>
          </div>

          <p>
            {count} <span className={raleway_display.className}> &#37;</span>
          </p>
        </div>
      </div> */}

     
      <div className={styles.mainBannerOuter}>
        <div className={styles.mainBannerContainer}>
          <div className={styles.mainBannerTextContainer}>
            <Image src={LoaderImage} alt="india gate" />

            <div className={styles.mainBannerTextLower} {...cursorHandlers}>
              <p className={`${styles.text}`}>
                {" "}
                <span>DIGITAL</span>
              </p>
              <p className={`${styles.text}`}>
                {" "}
                <span>DESIGNER</span>
              </p>
              <div>
                <p className={raleway_display.className}> NEW DELHI</p>
                <p className={raleway_display.className}>{ctime}(+5:30)</p>
              </div>
            </div>
          </div>
          <div className={styles.mainBannerImage}>
            <Image src={Jatin} alt="Jatin" />
          </div>
          <div className={styles.mainBannerDown} onClick={handleClickScroll}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="53"
              viewBox="0 0 32 53"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="52"
                rx="15.5"
                stroke="#F0F0F0"
                stroke-opacity="0.6"
              />
              <path
                d="M22 28.1149C22 28.1149 19.0458 28.6217 17.7812 29.8621C16.5167 31.1024 16 34 16 34M16 34C16 34 15.4833 31.1024 14.2187 29.8621C12.9542 28.6217 10 28.1149 10 28.1149M16 34L16 18"
                stroke="#F0F0F0"
                stroke-opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const BannerScreen = () => {
  return <div>Loader</div>;
};

const Banner = () => {
  const [loader, setLoader] = useState(true);

  return (
    <>
      <LoadScreen loaderChange={() => setLoader(false)} />
    </>
  );
};

export default Banner;
