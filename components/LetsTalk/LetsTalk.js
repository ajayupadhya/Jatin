"use client";
import Link from "next/link";
import React from "react";
import styles from "./letsTalk.module.css";
import { raleway_display } from "@/app/fonts";
import Button from "../common/Button";
const LetsTalk = () => {
  return (
    <div className={styles.letsTalkContainer}>
      <h4>Let's talk</h4>
      <div>
        <p className={raleway_display.className}>
          From a simple idea on paper to a complex business problem, I can help
          your business take that big leap!
        </p>
        <Button text={"Email Me"} link={"/"}/>
      </div>
    </div>
  );
};

export default LetsTalk;
