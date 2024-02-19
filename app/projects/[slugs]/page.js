"use client";
import SingleProject from "../../../components/ProjectPage/SingleProject/SingleProject";
import styles from "./projects.module.css";
import DubDub from "../../../Images/clients/cover.png";
import Deyor from "../../../Images/clients/cover (4).png";
import DecorasDesktop from "../../../Images/clients/cover (2).png";
import DecorasMobile from "../../../Images/clients/decorasMobile.png";
import BaziDesktop from "../../../Images/clients/cover (1).png";
import BaziMobile from "../../../Images/clients/baziMobile.png";
import TaxilaDesktop from "../../../Images/clients/cover (3).png";
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
import Cursor from "@/components/cursourAnimation/cursor";

const data = [
  {
    title: "Dubdub.ai",
    client: "https://www.dubdub.ai/",
    timeline: "2023",
    role: "UI UX • WEBSITE",
    image: DubDub,
    imageMobile: DubDub,
    link: "dubdub",
  },
  {
    title: "Baazi Games",
    client: "DECORASUSA.COM",
    timeline: "2021",
    role: "BRANDING, UX/UI, DEV",
    image: BaziDesktop,
    imageMobile: BaziMobile,
    link: "baaji-games",
  },
  {
    title: "Decoras",
    client: "DECORASUSA.COM",
    timeline: "2021",
    role: "Website Design",
    image: DecorasDesktop,
    imageMobile: DecorasMobile,
    link: "decoras-furniture",
  },

  {
    title: "Taxila Stone",
    client: "TAXILASTONE.COM",
    timeline: "2021",
    role: "BRANDING, UX/UI, DEV",
    image: TaxilaDesktop,
    imageMobile: TaxilaMobile,
    link: "taxila-stone",
  },
  {
    title: "Deyor camps",
    client: "https://www.deyorcamps.com/",
    timeline: "2021",
    role: "BRANDING, UX/UI, DEV",
    image: Deyor,
    imageMobile: TaxilaMobile,
    link: "taxila-stone",
  },
];

function getPageData(slug) {
  const filterPage = data.filter((item) => item.link === slug);
  return filterPage;
}

const Projects = (params) => {
  const page = getPageData(params.params.slugs);
  return (
    <>
      <Cursor />
      <div className="app_container" style={{ cursor: "auto !important" }}>
        <SingleProject
          item={page.length > 0 ? page[0] : []}
          index={0}
          all={5}
        />

        <div className={styles.content_container}>
          <div className={styles.overview_container}>
            <h2>CLIENT OVERVIEW</h2>
            <p className={raleway_display.className}>
              Dubdub, an AI-based dubbing platform startup headquartered in
              Bengaluru, stands at the forefront of the industry, specializing
              in dubbing audio, video, and text for both its free and premium
              users.
            </p>
          </div>

          <div className={styles.overview_container}>
            <h2>CHALLENGE</h2>
            <p className={raleway_display.className}>
              Dubdub approached me with some pressing issue: their existing
              website suffered from numerous UX problems, lacked brand
              visibility, and had a convoluted information architecture. The
              primary goal was clear—to establish a strong brand presence,
              highlight unique selling propositions, and streamline essential
              information. It was paramount to position Dubdub as a reliable,
              innovative dubbing solution provider. Importantly, my scope
              focused solely on redesigning the website, distinct from the
              dubbing application itself.
            </p>
          </div>
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
                later iterated to meet the business objectives that fit the
                user&apos;s needs and to come up with a possible solution.
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
                moving the business online for mobile and web. Close
                collaboration with each stakeholder was required to meet the
                project timelines and deliverables. It was of utmost importance
                that stakeholder feedback is incorporated along the way to
                deliver an excellent product.
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
          <SingleProject item={data[1]} index={1} all={3} next={true} />
        </div>
      </div>
    </>
  );
};

export default Projects;
