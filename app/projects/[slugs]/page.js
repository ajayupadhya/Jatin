"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Breadcrumb from "../../../components/ProjectPage/Bredcrumb";
import SingleProject from "../../../components/ProjectPage/SingleProject/SingleProject";
import styles from "./projects.module.css";
import DecorasDesktop from "../../../Images/clients/decorasDesktop.png";
import DecorasMobile from "../../../Images/clients/decorasMobile.png";
import BaziDesktop from "../../../Images/clients/bazziDesktop.png";
import BaziMobile from "../../../Images/clients/baziMobile.png";
import TaxilaDesktop from "../../../Images/clients/taxilaDesktop.png";
import TaxilaMobile from "../../../Images/clients/taxilaMobile.png";
import { raleway_display } from "@/app/fonts";
import Image from "next/image";

// import Images

import Challenge1 from "../../../Images/projects/challange1.png";
import Challenge2 from "../../../Images/projects/challange2.png";
import Approach1 from "../../../Images/projects/approach.png";
import Approach2 from "../../../Images/projects/approach1.png";
import Approach3 from "../../../Images/projects/approach3.png";
import Result1 from "../../../Images/projects/results1.png";
import Result2 from "../../../Images/projects/results2.png";
import Button from "@/components/common/Button/smallButton";

const Projects = () => {
  const data = [
    {
      title: "Decoras Furniture",
      client: "DECORASUSA.COM",
      timeline: "2021",
      role: "Website Design",
      image: DecorasDesktop,
      imageMobile: DecorasMobile,
      link: "/",
    },
    {
      title: "Baazi Games",
      client: "DECORASUSA.COM",
      timeline: "2021",
      role: "BRANDING, UX/UI, DEV",
      image: BaziDesktop,
      imageMobile: BaziMobile,
      link: "/",
    },
    {
      title: "Taxila Stone",
      client: "DECORASUSA.COM",
      timeline: "2021",
      role: "BRANDING, UX/UI, DEV",
      image: TaxilaDesktop,
      imageMobile: TaxilaMobile,
      link: "/",
    },
  ];
  const router = useRouter();
  const routes = [
    "/projects/decoras-furniture",
    "/projects/baaji-games",
    "/projects/taxila-stone",
  ];

  useEffect(() => {
    if (!routes.includes(window.location.pathname)) {
      router.push("/404");
    }
  });

  return (
    <div className="app_container">
      <Breadcrumb
        text={"Decoras Furniture"}
        link={"/projects/decoras-furniture"}
      />

      <SingleProject item={data[0]} index={0} all={3} />

      <div className={styles.overview_container}>
        <h2>OVERVIEW</h2>
        <p className={raleway_display.className}>
          Decoras is a state-of-the-art home decor brand built on the pillars of
          luxury, élan, elegance and class. Our products enchant for their
          sobriety, to last for generations, faithful to the shapes of each
          period, with a touch of the present.
        </p>
      </div>

      <div className={styles.middle__section__container}>
        <div className={styles.middle_single_section}>
          <div className={styles.left_side}>
            <h3>CHALLENGE</h3>
            <p className={raleway_display.className}>
              Decoras is a cradle-to-run project that I have worked on. The
              project requirement was to lay the foundation of a world-class
              decor brand that resonates with the upscale clientele of the USA
              market. To understand the needs better, I conducted market
              research and stakeholder interviews to understand the user needs
              and business goals. After collecting data from the research and
              interview, I established the functional and content requirements
              for the MVP.
            </p>
          </div>
          <div className={styles.right_side}>
            <div className={styles.image_container}>
              <Image src={Challenge1} alt="Challenge" />
            </div>
            <div className={styles.image_container}>
              <Image src={Challenge2} alt="Challenge" />
            </div>
          </div>
        </div>

        <div className={styles.middle_single_section}>
          <div className={styles.left_side}>
            <h3>APPROACH</h3>
            <p className={raleway_display.className}>
              My goal as a creative head for this project is to develop a
              solution-based design approach to help the brand solve real
              problems and achieve business excellence. I framed the UX and
              visual strategy at each step of the process to make the journey
              more holistic and complete from every aspect. Those ideas were
              later iterated to meet the business objectives that fit the user's
              needs and to come up with a possible solution.
            </p>
          </div>
          <div className={styles.right_side}>
            <div className={styles.image_container}>
              <Image src={Approach1} alt="Approach" />
            </div>
            <div className={styles.image_container}>
              <Image src={Approach2} alt="Approach" />
            </div>
          </div>
        </div>

        <div className={styles.middle_single_section}>
          <div className={styles.left_side}>
            <p className={raleway_display.className}>
              Everything was created from scratch, from naming the brand,
              creating the visual identity, designing various collateral, and
              moving the business online for mobile and web. Close collaboration
              with each stakeholder was required to meet the project timelines
              and deliverables. It was of utmost importance that stakeholder
              feedback is incorporated along the way to deliver an excellent
              product.
            </p>
          </div>
          <div className={styles.right_side}>
            <div className={styles.image_container}>
              <Image src={Approach3} alt="Approach" />
            </div>
            <div className={styles.image_container}>
              <Image src={Result1} alt="Approach" />
            </div>
          </div>
        </div>

        <div className={styles.middle_single_section}>
          <div className={styles.left_side}>
            <h3>RESULTS</h3>
            <p className={raleway_display.className}>
              The project went live in Jul 2022 with the collaborative efforts
              of my team and the business leaders.
            </p>
            <Button text={"Visit Website"} link={"/"} />
          </div>
          <div className={styles.right_side}>
            <div className={styles.image_container}>
              <Image src={Result2} alt="Result" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.next_page}>
        <div className={styles.next_page_bred}>
          <p className={raleway_display.className}> {"/*"} NEXT WORK</p>
        </div>
        <SingleProject item={data[1]} index={1} all={3} next = {true}/>
      </div>
    </div>
  );
};

export default Projects;
