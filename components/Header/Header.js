"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { raleway_display } from "@/app/fonts";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [logoChange, setLogoChange] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setLogoChange(true);
      } else {
        setLogoChange(false);
      }
    });
  }, []);

  const handleClickScroll = (val , scrollVal) => {
    //
    window.scrollBy(0, window.innerHeight * val + scrollVal);
  };

  return (
    <>
      <div className={styles.header_container_outer}>
        <nav className={styles.header_container}>
          {logoChange ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30 10L25 10L25 30L25 40L15 40L10 40L10 30L15 30L15 10L15 -2.18557e-06L25 -1.31134e-06L30 -8.74228e-07L30 10ZM30 10L40 10L40 20L30 20L30 10ZM10 30L10 20L-5.88094e-06 20L-6.75517e-06 30L10 30Z"
                fill="#D9D9D9"
              />
            </svg>
          ) : (
            <div className={styles.header_container_left}>
              <Link href="/" passHref>
                <p>Jatin Sharma</p>
                <p>.Design</p>
              </Link>
            </div>
          )}

          <div className={styles.header_container_right}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li onClick={() => handleClickScroll(1 , 100)}>Works</li>
              <li onClick={() => handleClickScroll(5 , 230)}>Contact</li>
            </ul>
          </div>
        </nav>
      </div>

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
              <div
                className={styles.header_container_mobile}
                style={{ margin: 0 }}
              >
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
                  <Link href="/" className={raleway_display.className}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="#works" className={raleway_display.className}>
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/" className={raleway_display.className}>
                    Contact
                  </Link>
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
