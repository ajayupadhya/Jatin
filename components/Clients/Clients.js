import Image from "next/image";
import React from "react";
import DubDub from "../../Images/clients/cover.png";
import Deyor from "../../Images/clients/cover (4).png";
import DecorasDesktop from "../../Images/clients/cover (2).png";
import DecorasMobile from "../../Images/clients/decorasMobile.png";
import BaziDesktop from "../../Images/clients/cover (1).png";
import BaziMobile from "../../Images/clients/baziMobile.png";
import TaxilaDesktop from "../../Images/clients/cover (3).png";
import TaxilaMobile from "../../Images/clients/taxilaMobile.png";
import Link from "next/link";
import Button from "../common/Button/smallButton";
import style from "./clients.module.css";
import { raleway_display } from "@/app/fonts";
import { UseCursorHandlers } from "../cursourAnimation/cursorHandler";
const Clients = () => {
  const cursorHandlers = UseCursorHandlers();
  const data = [
    {
      title: "Dubdub.ai",
      client: "https://www.dubdub.ai/",
      timeline: "2023",
      role: "UI UX • WEBSITE",
      image: DubDub,
      imageMobile: DubDub,
      link: "/projects/dubdub",
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
      title: "Decoras",
      client: "DECORASUSA.COM",
      timeline: "2021",
      role: "Website Design",
      image: DecorasDesktop,
      imageMobile: DecorasMobile,
      link: "/projects/decoras-furniture",
    },

    {
      title: "Taxila Stone",
      client: "TAXILASTONE.COM",
      timeline: "2021",
      role: "BRANDING, UX/UI, DEV",
      image: TaxilaDesktop,
      imageMobile: TaxilaMobile,
      link: "/projects/taxila-stone",
    },
    {
      title: "Deyor camps",
      client: "https://www.deyorcamps.com/",
      timeline: "2021",
      role: "BRANDING, UX/UI, DEV",
      image: Deyor,
      imageMobile: TaxilaMobile,
      link: "/projects/taxila-stone",
    },
  ];
  return (
    <>
      <div className={style.clientContainer}>
        <div className={style.ClientContainerHeader} id="works">
          <Link href={"/"} className={raleway_display.className}>
            {"/*"} SELECTED WORKS
          </Link>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className={style.singleClient}>
              <div className={style.singleClientImage} {...cursorHandlers}>
                <Image src={item.image} alt={item.image} />
              </div>
              <div className={style.singleClientText}>
                <div className={style.singleClientTextContainer}>
                  <p>
                    0{index + 1} / 0{data?.length}
                  </p>
                  <h4>{item.title}</h4>
                  <p className={raleway_display.className}>
                    {" "}
                    {item.role} : {item.timeline}
                  </p>
                </div>

                <Button text={"View Case"} link={item.link} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={style.clientContainerMobile}>
        <div className={style.work_count_mobile}>
          <p> {"/*"} WORK</p>
        </div>
        <div className={style.carousalContainer}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <h2 className={style.workDateMobile}>
                  0{index + 1} / 0{data?.length}
                </h2>
                <div key={index} className={style.singleClientMobile}>
                  <div className={style.singleClientImageMobile}>
                    <Image src={item.image} alt={item.image} />
                    <div className={style.singleClientTextMobile}>
                      <h4 className={raleway_display.classNameMobile}>
                        {item.title}
                      </h4>
                    </div>
                    <div className={style.singleClientTextContainerMobile}>
                      <div>
                        <p>{item.client}</p>
                        <p className={style.singleClientTextRoleTextMobile}>
                          {item.role} . {item.timeline}
                        </p>
                        <p></p>
                      </div>
                      <div style={{ width: 60 }}>
                        <Button
                          link={item.link}
                          className={style.smallButtonLink}
                      
                        >
                          <svg
                            width="25"
                            height="20"
                            viewBox="0 0 25 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.1724 1C15.1724 1 15.9326 5.43128 17.7931 7.32813C19.6536 9.22497 24 10 24 10M24 10C24 10 19.6536 10.775 17.7931 12.6719C15.9326 14.5687 15.1724 19 15.1724 19M24 10L0 10"
                              stroke="#F0F0F0"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Button
            text="See All Works"
            className={style.allWorkButton}
            link={"/projects"}
          >
            <svg
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1724 1C15.1724 1 15.9326 5.43128 17.7931 7.32813C19.6536 9.22497 24 10 24 10M24 10C24 10 19.6536 10.775 17.7931 12.6719C15.9326 14.5687 15.1724 19 15.1724 19M24 10L0 10"
                stroke="#F0F0F0"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Clients;
