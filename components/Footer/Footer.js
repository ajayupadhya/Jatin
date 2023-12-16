"use client";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { raleway_display } from "@/app/fonts";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLineSeparate}></div>
      <div className={styles.footerContainerTop}>
        <Link href={"/"} className={raleway_display.className}>
          LINKEDIN
        </Link>
        <Link href={"/"} className={raleway_display.className}>
          BEHANCE
        </Link>
        <Link href={"/"} className={raleway_display.className}>
          INSTAGRAM{" "}
        </Link>
        <Link href={"/"} className={raleway_display.className}>
          RESUME
        </Link>
      </div>
      <div className={styles.footerLineSeparate}></div>
      {/* <div className={styles.footerContainerMiddle}>
        <p>
          Special thanks <span> DEVELOPER </span> for development
        </p>
      </div> */}
      <div className={styles.footerLineSeparate}></div>
      <div className={styles.footerContainerBottom}>
        <p className={raleway_display.className}>
          JATIN SHARMA All rights reserved 2023{" "}
        </p>
        {/* <p className={raleway_display.className}>All rights reserved 2023</p> */}
        <div className={styles.bottomToTop}>
          <div className={styles.mainBannerDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="24"
              viewBox="0 0 25 34"
              fill="none"
            >
              <path
                d="M0.5 13.1379C0.5 13.1379 6.40838 12.0927 8.9375 9.53448C11.4666 6.97629 12.5 1 12.5 1M12.5 1C12.5 1 13.5334 6.97629 16.0625 9.53448C18.5916 12.0927 24.5 13.1379 24.5 13.1379M12.5 1L12.5 34"
                stroke="#F0F0F0"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
