"use client";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <nav className={styles.header_container}>
      <div className={styles.header_container_left}>
        <Link href="/" passHref>
        
            <p>Jatin Sharma</p>
            <p>.Design</p>
     
        </Link>
      </div>
      <div className={styles.header_container_right}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Works</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
