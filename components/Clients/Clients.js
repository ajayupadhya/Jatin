import Image from "next/image";
import React from "react";
import DecorasDesktop from "../../Images/clients/decorasDesktop.png";
import DecorasMobile from "../../Images/clients/decorasMobile.png";
import BaziDesktop from "../../Images/clients/bazziDesktop.png";
import BaziMobile from "../../Images/clients/baziMobile.png";
import TaxilaDesktop from "../../Images/clients/taxilaDesktop.png";
import TaxilaMobile from "../../Images/clients/taxilaMobile.png";
import Link from "next/link";
import Button from "../common/Button/smallButton";
import style from "./clients.module.css";
import { raleway_display } from "@/app/fonts";
const Clients = () => {
  const data = [
    {
      title: "Decoras Furniture",
      client: "DECORASUSA.COM",
      timeline: "JULY 2021",
      role: "BRANDING, UX/UI, DEV",
      image: DecorasDesktop,
      imageMobile: DecorasMobile,
      link: "/",
    },
    {
      title: "Baazi Games",
      client: "DECORASUSA.COM",
      timeline: "JULY 2021",
      role: "BRANDING, UX/UI, DEV",
      image: BaziDesktop,
      imageMobile: BaziMobile,
      link: "/",
    },
    {
      title: "Taxila Stone",
      client: "DECORASUSA.COM",
      timeline: "JULY 2021",
      role: "BRANDING, UX/UI, DEV",
      image: TaxilaDesktop,
      imageMobile: TaxilaMobile,
      link: "/",
    },
  ];
  return (
    <>
      <div className={style.ClientContainerHeader} id = "works">
        <Link href={"/"} className={raleway_display.className}>
          {"/*"} WORKS
        </Link>
      </div>
      <div className={style.clientContainer}>
        {data.map((item, index) => {
          return (
            <div key={index} className={style.singleClient}>
              <div className={style.singleClientImage}>
                <Image src={item.image} alt={item.image} />
              </div>
              <div className={style.singleClientText}>
                <div className={style.singleClientTextContainer}>
                  <p>0{index + 1} / 0{data?.length}</p>
                  <h4>{item.title}</h4>
                  <p className={raleway_display.className}> Website Design : {item.timeline}</p>
                </div>

                <Button text={"View Case"} link={item.link} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={style.clientContainerMobile}>
        <div className={style.work_count_mobile}>
          <p> {"/*"} WORK</p> <p>{/* 0 {index + 1} / 0{data.length} */}01/05</p>
        </div>
        <div className={style.carousalContainer}>
          {data.map((item, index) => {
            return (
              <div key={index} className={style.singleClientMobile}>
                <div className={style.singleClientTextMobile}>
                  <h4 className={raleway_display.classNameMobile}>
                    {item.title}
                  </h4>
                </div>
                <div className={style.singleClientImageMobile}>
                  <Image src={item.image} alt={item.image} />
                  <div className={style.singleClientTextContainerMobile}>
                    <div>
                      <p>CLIENT : {item.client}</p>
                      <p>TIMELINE : {item.timeline}</p>
                      <p>ROLE : {item.role}</p>
                    </div>

                    <Button text={"VIEW CASE STUDY"} link={item.link} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Clients;
