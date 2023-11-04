"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import {
  Banner,
  Clients,
  Intro,
  LetsTalk,
  Services,
  Marque,
  // Testimonial,
} from "../components";

import CursorContextProvider from "../components/cursourAnimation/cursorContext";
import Cursor from "../components/cursourAnimation/cursor"
export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
       <CursorContextProvider>
        <Cursor/>
        <div className="progressMainWrapper">
          <div
            className="progressMainStyle"
            style={{ width: `${scrollTop}%` }}
          ></div>
        </div>
        <div className="app_container">
          <Banner />
          <Clients />
          <Intro />
          <Marque />
          <Services />
          {/* <Testimonial /> */}
          <LetsTalk />
        </div>
        </CursorContextProvider>
    </>
  );
}
