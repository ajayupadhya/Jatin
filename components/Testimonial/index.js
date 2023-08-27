import Link from "next/link";
import React from "react";
import Card from "../common/Card/Card";
import Person from "../../Images/testimonialImage.png";
import styles from "./testimonial.module.css";
import { raleway_display } from "@/app/fonts";
const data = [
  {
    id: 1,
    description:
      "Thrilled with Jatin's work on the DECORAS website! Their design skills transformed our vision into a captivating reality. The site's aesthetics and functionality are top-notch, reflecting their deep understanding of our brand. Working with [Your Name] was seamless; their professionalism and attention to detail were commendable.",
    image: Person,
    name: "Vasudha Khandelwal",
    company: "MD, Rasik Group",
  },
  {
    id: 2,
    description:
      "Thrilled with Jatin's work on the DECORAS website! Their design skills transformed our vision into a captivating reality. The site's aesthetics and functionality are top-notch, reflecting their deep understanding of our brand. Working with [Your Name] was seamless; their professionalism and attention to detail were commendable.",
    image: Person,
    name: "Vasudha Khandelwal",
    company: "MD, Rasik Group",
  },
  {
    id: 3,
    description:
      "Thrilled with Jatin's work on the DECORAS website! Their design skills transformed our vision into a captivating reality. The site's aesthetics and functionality are top-notch, reflecting their deep understanding of our brand. Working with [Your Name] was seamless; their professionalism and attention to detail were commendable.",
    image: Person,
    name: "Vasudha Khandelwal",
    company: "MD, Rasik Group",
  },
  {
    id: 4,
    description:
      "Thrilled with Jatin's work on the DECORAS website! Their design skills transformed our vision into a captivating reality. The site's aesthetics and functionality are top-notch, reflecting their deep understanding of our brand. Working with [Your Name] was seamless; their professionalism and attention to detail were commendable.",
    image: Person,
    name: "Vasudha Khandelwal",
    company: "MD, Rasik Group",
  },
  {
    id: 1,
    description:
      "Thrilled with Jatin's work on the DECORAS website! Their design skills transformed our vision into a captivating reality. The site's aesthetics and functionality are top-notch, reflecting their deep understanding of our brand. Working with [Your Name] was seamless; their professionalism and attention to detail were commendable.",
    image: Person,
    name: "Vasudha Khandelwal",
    company: "MD, Rasik Group",
  },
  {
    id: 2,
    description:
      "Thrilled with Jatin's work on the DECORAS website! Their design skills transformed our vision into a captivating reality. The site's aesthetics and functionality are top-notch, reflecting their deep understanding of our brand. Working with [Your Name] was seamless; their professionalism and attention to detail were commendable.",
    image: Person,
    name: "Vasudha Khandelwal",
    company: "MD, Rasik Group",
  },
  {
    id: 3,
    description:
      "Thrilled with Jatin's work on the DECORAS website! Their design skills transformed our vision into a captivating reality. The site's aesthetics and functionality are top-notch, reflecting their deep understanding of our brand. Working with [Your Name] was seamless; their professionalism and attention to detail were commendable.",
    image: Person,
    name: "Vasudha Khandelwal",
    company: "MD, Rasik Group",
  },
  {
    id: 4,
    description:
      "Thrilled with Jatin's work on the DECORAS website! Their design skills transformed our vision into a captivating reality. The site's aesthetics and functionality are top-notch, reflecting their deep understanding of our brand. Working with [Your Name] was seamless; their professionalism and attention to detail were commendable.",
    image: Person,
    name: "Vasudha Khandelwal",
    company: "MD, Rasik Group",
  },
];

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonialTitle}>
        <Link href={"/"} className={raleway_display.className}>/* Testimonial</Link>
      </div>
      <div className={styles.testimonialCard}>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
