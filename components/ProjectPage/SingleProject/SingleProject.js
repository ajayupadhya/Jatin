import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button/smallButton";
import style from "./SingleProject.module.css";
import { raleway_display } from "../../../app/fonts";
const SingleProject = ({ item, index, all, next }) => {
  return (
    <div key={index} className={style.singleClient}>
     
      <div className={style.singleClientText}>
        <div className={style.singleClientTextContainer}>
          <p>
            0{index + 1} / 0{all}
          </p>
          <h4>{item.title}</h4>
          <p className={raleway_display.className}>
            {" "}
            Website Design : {item.timeline}
          </p>
        </div>
        {next && <Button text={"View Case"} link={item.link} />}
      </div>
      <div className={style.singleClientImage}>
        <Image src={item.image} alt={item.image} />
      </div>
    </div>
  );
};

export default SingleProject;
