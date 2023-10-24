"use client"

import React from "react";
import Breadcrumb from "../../components/ProjectPage/Bredcrumb";
import styles from "./works.module.css";
import DecorasDesktop from "../../Images/clients/decorasDesktop.png";
import DecorasMobile from "../../Images/clients/decorasMobile.png";
import BaziDesktop from "../../Images/clients/bazziDesktop.png";
import BaziMobile from "../../Images/clients/baziMobile.png";
import TaxilaDesktop from "../../Images/clients/taxilaDesktop.png";
import TaxilaMobile from "../../Images/clients/taxilaMobile.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Projects = () => {
  const route = useRouter();
  const data = [
    {
      title: "Decoras",
      client: "DECORASUSA.COM",
      timeline: "2021",
      role: "Website Design",
      image: DecorasDesktop,
      imageMobile: DecorasMobile,
      link: "/projects/decoras-furniture",
    },
    {
      title: "Baazi Games",
      client: "DECORASUSA.COM",
      timeline: "2021",
      role: "BRANDING, UX/UI, DEV",
      image: BaziDesktop,
      imageMobile: BaziMobile,
      link: "/projects/baaji-games",
    },
    {
      title: "Taxila",
      client: "DECORASUSA.COM",
      timeline: "2021",
      role: "BRANDING, UX/UI, DEV",
      image: TaxilaDesktop,
      imageMobile: TaxilaMobile,
      link: "/projects/taxila-stone",
    },
  ];
  return (
    <div className="app_container">
      <Breadcrumb text={"All Works"} link={""} main={"ALL Works"} />
      <div className={styles.all_works_container}>
        {data?.map((item, index) => (
          <div
            key={index}
            className={styles.single_works}
            onClick={() => route.push(item?.link)}
          >
            <p>0{index + 1}</p>
            <h2>{item?.title}</h2>

            <div className={styles.image_container}>
              <Image src={item?.image} alt={item?.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
