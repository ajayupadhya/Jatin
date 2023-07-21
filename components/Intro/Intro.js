import React from "react";
import styles from "./intro.module.css";
import Image from "next/image";
import AboutImage from "../../Images/about.jpg";
import Link from "next/link";
import Button from "../common/Button";
const Intro = () => {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.IntroContainerImage}>
        <Image src={AboutImage} alt={AboutImage} />
      </div>
      <div className={styles.IntroContainerText}>
        <div className={styles.IntroContainerHeader}>
          <Link href={"/"}> {"/*"} ABOUT</Link>

          <p className={styles.IntroContainerAbout}>
            I am a New Delhi based self-taught designer with over 7+ years of
            industry-wide experience in building technology products for small,
            mid to large-sized businesses.
          </p>
        </div>
        <Button text={"READ MORE"} link={"/"} />
      </div>
    </div>
  );
};

export default Intro;
