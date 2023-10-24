"use client";
import Link from "next/link";
import React from "react";
import style from "./small.module.css";
import { raleway_display } from "@/app/fonts";
const Button = ({ text, link, className }) => {
  return (
    <Link href={link} className={`${style.link_button} ${className}`}>
       <p className={raleway_display.className}>{text?.toUpperCase()}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="16"
        viewBox="0 0 19 16"
        fill="none"
      >
        <path
          d="M11.3793 1C11.3793 1 11.9495 4.44655 13.3448 5.92188C14.7402 7.3972 18 8 18 8M18 8C18 8 14.7402 8.6028 13.3448 10.0781C11.9495 11.5534 11.3793 15 11.3793 15M18 8L0 8"
          stroke="#F0F0F0"
        />
      </svg>
    </Link>
  );
};

export default Button;
