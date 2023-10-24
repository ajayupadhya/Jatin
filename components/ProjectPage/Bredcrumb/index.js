import Link from "next/link";
import React from "react";
import styles from "./bredcrumb.module.css";
import { raleway_display } from "@/app/fonts";

const Breadcrumb = ({ text, link, main }) => {
  
  return (
    <div className={styles.breadcrumb__container}>
      <span className={raleway_display.className}>{"/*"}</span>
      <Link href="/works" className={raleway_display.className}>
        {main}
      </Link>{" "}
      {link && (
        <>
          {" "}
          <span className={raleway_display.className}>/ </span>
          <Link href={link} className={raleway_display.className}>
            {"     "} {text}
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
