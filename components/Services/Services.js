import Link from "next/link";
import React from "react";
// import RotateOnScroll from "../common/RotateOnScroll";
import styles from "./services.module.css";
import { raleway_display } from "@/app/fonts";
const Services = () => {
  const serviceData = [
    {
      id: 1,
      service: "Product Design",
    },
    {
      id: 2,
      service: "Web Design",
    },
    {
      id: 7,
      service: `<svg xmlns="http://www.w3.org/2000/svg" width="66" height="48" viewBox="0 0 66 48" fill="none">
      <path d="M41.092 0.5C41.092 0.5 43.1508 12.0706 48.1897 17.0234C53.2285 21.9763 65 24 65 24M65 24C65 24 53.2285 26.0237 48.1897 30.9766C43.1508 35.9294 41.092 47.5 41.092 47.5M65 24L0 24" stroke="#F0F0F0" strokeWidth="2"/>
    </svg>`,
    },
    {
      id: 3,
      service: "Mobile Design",
    },
    {
      id: 4,
      service: "UX Strategy",
    },
    {
      id: 5,
      service: "Visual Design",
    },
    {
      id: 6,
      service: "Brand Identity",
    },
  ];

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.serviceContainerHeader}>
        <Link href={"/"} className={raleway_display.className}>   {"/*"} SERVICES</Link>
      </div>

      <div className={styles.serviceContainerData}>
        <div>
          <p>Website</p>
          <p>Mobile Apps</p>
          <p>Design Systems</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="48"
            viewBox="0 0 66 48"
            fill="none"
          >
            <path
              d="M41.092 0.5C41.092 0.5 43.1508 12.0706 48.1897 17.0234C53.2285 21.9763 65 24 65 24M65 24C65 24 53.2285 26.0237 48.1897 30.9766C43.1508 35.9294 41.092 47.5 41.092 47.5M65 24L0 24"
              stroke="#F0F0F0"
              strokeWidth="2"
            />
          </svg>

          <p>Interaction Design</p>
          <p>&</p>
          <p>Animation</p>
        </div>
        <div>
          <p>Art Direction</p>
          <p>Visual Design</p>
          <p>Brand Identity</p>
        </div>
      </div>
      {/* <RotateOnScroll /> */}
    </div>
  );
};

export default Services;
