"use client";
import SingleProject from "../../../components/ProjectPage/SingleProject/SingleProject";
import styles from "./projects.module.css";

import { raleway_display } from "@/app/fonts";
import Image from "next/image";

import { clientData } from "../../../lib/data";

// import Images
import MainImage from "../../../Images/projects/main.png";
// import Challenge1 from "../../../Images/projects/challange1.png";
// import Challenge2 from "../../../Images/projects/challange2.png";
import Approach1 from "../../../Images/projects/approach.png";
import Approach2 from "../../../Images/projects/approach1.png";
import Approach3 from "../../../Images/projects/approach3.png";
import Result1 from "../../../Images/projects/results1.png";
import Result2 from "../../../Images/projects/results2.png";
import Button from "@/components/common/Button/smallButton";
import Cursor from "@/components/cursourAnimation/cursor";

function getPageData(slug) {
  const filterPage = clientData.filter((item) => item.link === slug);
  return filterPage;
}

const Projects = (params) => {
  const page = getPageData(params.params.slugs);
  return (
    <>
      <Cursor />
      <div className={`app_container ${styles.mobileContainer}`}  style={{ cursor: "auto !important" }}>
        <SingleProject
          item={page.length > 0 ? page[0] : []}
          index={page[0].id}
          all={clientData.length}
        />

        <div className={styles.content_container}>
          <div className={styles.overview_container}>
            <h2>CLIENT OVERVIEW</h2>
            <p className={raleway_display.className}>{page[0].Overview}</p>
          </div>

          <div className={styles.overview_container}>
            <h2>CHALLENGE</h2>
            <p className={raleway_display.className}>{page[0].Challenge}</p>
          </div>
        </div>

        <div className={styles.middle__section__container}>
          <div className={styles.mainImageContainer}>
            <Image src={MainImage} alt="Main" fill />
          </div>

          <div className={styles.middle_single_section}>
            <div className={styles.left_side}>
              <h3>APPROACH</h3>
              <p className={raleway_display.className}>{page[0].Approach}</p>
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
              <h3>SOLUTION</h3>
              <p className={raleway_display.className}>{page[0].Solution}</p>
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
              <h3>STRONG WORDS </h3>
              <p className={raleway_display.className}>
                The project went live in Jul 2022 with the collaborative efforts
                of my team and the business leaders.
              </p>
            </div>
            <div className={styles.right_side}>
              <div className={styles.image_container}>
                <Image src={Result2} alt="Result" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.resultsContainer}>
          <h3>RESULTS</h3>
          <p className={raleway_display.className}>
            The project went live in Jul 2022 with the collaborative efforts of
            my team and the business leaders.
          </p>

          <Button text={"Visit Website"} link={page[0].client} />
        </div>

        {page.length > 0 && page[0].id + 1 < clientData.length && (
          <div className={styles.next_page}>
            <div className={styles.next_page_bred}>
              <p className={raleway_display.className}> {"/*"} NEXT WORK</p>
            </div>
            <SingleProject
              item={clientData[page[0].id + 1]}
              index={page[0].id + 1}
              all={clientData.length}
              next={true}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
