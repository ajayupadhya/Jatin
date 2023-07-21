"use client"
import Link from "next/link";
import React from "react";
import styles from "./letsTalk.module.css"
import { playFair_display } from "@/app/fonts";
const LetsTalk = () => {
  return (
    <div className={styles.letsTalkContainer}>
      <h4 className={playFair_display.className}>Let's talk</h4>
      <p>
        From a simple idea on paper to a complex business problem, I can help
        your business take that big leap!
      </p>
      <Link href={"/"}>EMAIL ME</Link>
    </div>
  );
};

export default LetsTalk;
