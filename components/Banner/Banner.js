"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import LoaderImage from "../../Images/indiaGate.svg";
import { playFair_display } from "@/app/fonts";
const LoadScreen = ({ loaderChange }) => {
  const [count, setCount] = useState(0);

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

  return (
    <>
      {/* <div
        className={`${styles.loaderScreen} ${
          count === 100 && styles.animate_loader
        }`}
      >
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
            {count} <span className={playFair_display.className}> &#37;</span>
          </p>
        </div>
      </div> */}
      <div className={styles.mainBannerContainer}>
        <div className={styles.mainBannerTextContainer}>
          <p className={styles.mainBannerTextUpper}>
            <span>D</span>
            <span>I</span>
            <span>G</span>
            <span>I</span>
            <span>T</span>
            <span>A</span>
            <span>L</span>
            <Image src={LoaderImage} alt="India gate"/>
          </p>
          <p className={styles.mainBannerTextLower}>
            <span>D</span>
            <span>E</span>
            <span>S</span>
            <span>I</span>
            <span>G</span>
            <span>N</span>
            <span>E</span>
            <span>R</span>
          </p>
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