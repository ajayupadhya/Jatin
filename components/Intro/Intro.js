import React from "react";
import styles from "./intro.module.css";
import Image from "next/image";
import AboutImage from "../../Images/about.jpg";
import Link from "next/link";
import Button from "../common/Button";
import { raleway_display } from "@/app/fonts";
const Intro = () => {
  return (
    <div className={styles.IntroContainer}>
      <Link href={"/"} className={raleway_display.className}>
        {"/*"} ABOUT
      </Link>
      <div className={styles.IntroContainerHeader}>
        <p>
          <span>
            New Delhi-based digital designer with 7+ years of experience
            crafting technology solutions for businesses of all sizes.
          </span>
        </p>
        <div className={styles.IntroContainerAbout}>
          <p className={raleway_display.className}>
            <span>
              As a designer, I advocate for user needs and set up collaborative
              design strategies early on for growing businesses. While I am not
              busy creating design strategies, conducting UX workshops,
              brainstorming ideas, and white-boarding challenges. I love
              traveling, trekking the Himalayas, motorcycle, making art, and
              taking pictures.
            </span>
          </p>
          <p className={raleway_display.className}>
            <span>
              Currently, I am a Product Designer at @POKERBAAZI, India’s biggest
              poker platform. Building & setting up a design process for the
              poker revolution in India. Feel free to connect with me for
              collaboration and consultation.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
