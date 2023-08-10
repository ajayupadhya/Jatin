"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { playFair_display } from "@/app/fonts";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  return (
    <>
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
      <nav className={styles.header_container_mobile}>
        <div className={styles.header_container_left_mobile}>
          <Link href="/" passHref>
            <p>Jatin Sharma</p>
            <p>.Design</p>
          </Link>
        </div>

        <div className={styles.header_container_right_mobile}>
          {drawerOpen ? (
            <div
              className={styles.hamburger_container}
              onClick={() => setDrawerOpen((prev) => !prev)}
            >
              <div className={styles.hamburger_one}></div>
              <div className={styles.hamburger_two}></div>
            </div>
          ) : (
            <div className={styles.drawerOpen_mobile}>
              <div className={styles.header_container_mobile} style={{margin:0}}>
                <div className={styles.header_container_left_mobile}>
                  <Link href="/" passHref>
                    <p>Jatin Sharma</p>
                    <p>.Design</p>
                  </Link>
                </div>

                <div
                  className={styles.hamburger_container}
                  onClick={() => setDrawerOpen((prev) => !prev)}
                >
                  <div className={styles.hamburger_one}></div>
                  {/* <div className={styles.hamburger_two}></div> */}
                </div>
              </div>

              <ul className={styles.drawerOpen_mobile_text_container}>
                <li>
                  <Link href="/" className={playFair_display.className}>Home</Link>
                </li>
                <li>
                  <Link href="/"  className={playFair_display.className}>About</Link>
                </li>
                <li>
                  <Link href="/"  className={playFair_display.className}>Works</Link>
                </li>
                <li>
                  <Link href="/"  className={playFair_display.className}>Contact</Link>
                </li>
              </ul>
              <div className={styles.drawerOpenFooter}>
                <Link href={"/"}>LINKEDIN</Link>
                <Link href={"/"}>BEHANCE</Link>
                <Link href={"/"}>INSTAGRAM</Link>
                <Link href={"/"}>RESUME</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
