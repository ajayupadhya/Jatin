"use client";
import Link from "next/link";
import React from "react";
import styles from "./letsTalk.module.css";
import { raleway_display } from "@/app/fonts";
import Button from "../common/Button/smallButton";
import { UseCursorHandlers } from "../cursourAnimation/cursorHandler";
const LetsTalk = () => {
  const cursorHandlers = UseCursorHandlers();
  return (
    <>
      <div className={styles.buttonAnimation} {...cursorHandlers}>
        <div>
          <div>
            <div className={styles.letsTalkContainer}>
              <p className={raleway_display.className}>
                Got a project in mind?
              </p>
              <h4>Let&#39;s talk</h4>

              <Button text={"Email Me"} link={"/"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsTalk;
