"use client";
import {
  Banner,
  Clients,
  Intro,
  LetsTalk,
  Services,
  Marque,
  // Testimonial,
} from "../components";


import Cursor from "../components/cursourAnimation/cursor";
export default function Home() {
  return (
    <>
      <Cursor />
      <div className="progressMainWrapper"></div>
      <div className="app_container">
        <Banner />
        <Clients />
        <Intro />
        <Marque />
        <Services />
        {/* <Testimonial /> */}
        <LetsTalk />
      </div>
    </>
  );
}
