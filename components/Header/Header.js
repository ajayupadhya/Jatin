"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { raleway_display } from "@/app/fonts";
import HeaderWorks from "./HeaderWorks";
import { useRouter } from "next/navigation";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [logoChange, setLogoChange] = useState(1);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(50);
  const [openWorks, setOpenWorks] = useState(false);

  const router = useRouter();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar

        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      if (window.scrollY > 50) setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (window.location.pathname.includes("projects")) setLogoChange(2);
    else setLogoChange(1);
  }, [router, logoChange]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleClickScroll = (val, scrollVal, clicked) => {
    if (window.location.pathname.includes("projects") && clicked === 1) {
      router.push("/");
    }
    setLogoChange(clicked);
    window.scrollTo(0, window.innerHeight * val + scrollVal);
  };

  console.log(logoChange);

  return (
    <>
      {show && (
        <div className={styles.header_container_outer}>
          <nav className={styles.header_container}>
            <div className={styles.header_container_left}>
              <Link href="/" passHref>
                <p>Jatin</p>
                <p>Sharma</p>
              </Link>
            </div>

            <div className={styles.header_container_right}>
              <ul>
                <li
                  onClick={() => handleClickScroll(0, 0, 1)}
                  style={
                    logoChange === 1
                      ? { textDecoration: "underline", textUnderlineOffset: 5 }
                      : { textDecoration: "none", opacity: 0.5 }
                  }
                >
                  Home
                </li>

                <li
                  onClick={() => router.push("/projects")}
                  style={
                    logoChange === 2
                      ? { textDecoration: "underline", textUnderlineOffset: 5 }
                      : { textDecoration: "none", opacity: 0.5 }
                  }
                >
                  Works
                </li>
                <li
                  onClick={() => handleClickScroll(5, 230, 3)}
                  style={
                    logoChange === 3
                      ? { textDecoration: "underline", textUnderlineOffset: 5 }
                      : { textDecoration: "none", opacity: 0.5 }
                  }
                >
                  Contact
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}

      <nav className={styles.header_container_mobile}>
        <div className={styles.header_container_left_mobile}>
          <Link href="/" passHref>
            <p>Jatin</p>
            <p>Sharma</p>
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
                  <Link
                    href="/"
                    className={raleway_display.className}
                    style={
                      logoChange === 1
                        ? {
                            textDecoration: "line-through",
                            fontStyle: "italic",
                            color: "#fff",
                          }
                        : { textDecoration: "none", fontStyle: "normal" }
                    }
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/works"
                    className={raleway_display.className}
                    style={
                      logoChange === 2
                        ? {
                            textDecoration: "line-through",
                            fontStyle: "italic",
                            color: "#fff",
                          }
                        : { textDecoration: "none", fontStyle: "normal" }
                    }
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className={raleway_display.className}
                    style={
                      logoChange === 3
                        ? {
                            textDecoration: "line-through",
                            fontStyle: "italic",
                            color: "#fff",
                          }
                        : { textDecoration: "none", fontStyle: "normal" }
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className={styles.drawerOpenFooter}>
                <Link href={"/"} className={raleway_display.className}>
                  LINKEDIN
                </Link>
                <Link href={"/"} className={raleway_display.className}>
                  BEHANCE
                </Link>
                <Link href={"/"} className={raleway_display.className}>
                  INSTAGRAM
                </Link>
                <Link href={"/"} className={raleway_display.className}>
                  RESUME
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      {openWorks && <HeaderWorks />}
    </>
  );
};

export default Header;
