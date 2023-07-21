"use client";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { playFair_display } from "@/app/fonts";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLineSeparate}></div>
      <div className={styles.footerContainerTop}>
        <Link href={"/"}>LINKEDIN</Link>
        <Link href={"/"}>BEHANCE</Link>
        <Link href={"/"}>INSTAGRAM </Link>
        <Link href={"/"}>RESUME</Link>
      </div>
      <div className={styles.footerLineSeparate}></div>
      <div className={styles.footerContainerMiddle}>
        <p className={playFair_display.className}>
          Special thanks <span> DEVELOPER </span> for development
        </p>
      </div>
      <div className={styles.footerLineSeparate}></div>
      <div className={styles.footerContainerBottom}>
        <p>JATIN SHARMA</p>
        <p>All rights reserved 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
