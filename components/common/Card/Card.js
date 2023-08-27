import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import { raleway_display } from "@/app/fonts";
const Card = ({item}) => {
  return (
    <div className={styles.CardContainer}>
      <p className={raleway_display.className}>{item?.description}</p>
      <div>
        <Image src={item?.image} alt="Image" />
        <div>
          <p className={raleway_display.className}>{item?.name}</p>
          <p className={raleway_display.className}>{item?.company}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
