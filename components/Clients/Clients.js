import Image from "next/image";
import React from "react";
import ProductImage from "../../Images/product.jpg";
import Button from "../common/Button/smallButton";
import style from "./clients.module.css";
import { raleway_display } from "@/app/fonts";
const Clients = () => {
  const data = [
    {
      title: "Decoras",
      client: "DECORASUSA.COM",
      timeline: "JULY 2021",
      role: "BRANDING, UX/UI, DEV",
      image: ProductImage,
      link: "/",
    },
    {
      title: "Decoras",
      client: "DECORASUSA.COM",
      timeline: "JULY 2021",
      role: "BRANDING, UX/UI, DEV",
      image: ProductImage,
      link: "/",
    },
    {
      title: "Decoras",
      client: "DECORASUSA.COM",
      timeline: "JULY 2021",
      role: "BRANDING, UX/UI, DEV",
      image: ProductImage,
      link: "/",
    },
    {
      title: "Decoras",
      client: "DECORASUSA.COM",
      timeline: "JULY 2021",
      role: "BRANDING, UX/UI, DEV",
      image: ProductImage,
      link: "/",
    },
  ];
  return (
    <>
      <div className={style.clientContainer}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={style.singleClient}
              style={
                index % 2 !== 0
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }
              }
            >
              <div className={style.singleClientImage}>
                <Image src={item.image} alt={item.image} />
              </div>
              <div className={style.singleClientText}>
                <div>
                  {"/*"} WORK 0{index + 1} / 0{data.length}
                </div>
                <h4 className={raleway_display.className}>{item.title}</h4>
                <div className={style.singleClientTextContainer}>
                  <p>* CLIENT : {item.client}</p>
                  <p>* TIMELINE : {item.timeline}</p>
                  <p>* ROLE : {item.role}</p>
                </div>

                <Button text={"VIEW CASE STUDY"} link={item.link} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={style.clientContainerMobile}>
        <div className={style.work_count_mobile}>
          <p>/* WORK</p> <p>{/* 0 {index + 1} / 0{data.length} */}01/05</p>
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
