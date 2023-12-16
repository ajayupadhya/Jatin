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
        <Link href={"/"} className={raleway_display.className}>LINKEDIN</Link>
        <Link href={"/"} className={raleway_display.className}>BEHANCE</Link>
        <Link href={"/"} className={raleway_display.className}>INSTAGRAM </Link>
        <Link href={"/"} className={raleway_display.className}>RESUME</Link>
      </div>
      <div className={styles.footerLineSeparate}></div>
      {/* <div className={styles.footerContainerMiddle}>
        <p>
          Special thanks <span> DEVELOPER </span> for development
        </p>
      </div> */}
      <div className={styles.footerLineSeparate}></div>
      <div className={styles.footerContainerBottom}>
        <p className={raleway_display.className}>JATIN SHARMA    All rights reserved 2023 </p>
        {/* <p className={raleway_display.className}>All rights reserved 2023</p> */}
      </div>
    </footer>
  );
};

export default Footer;
