import React from "react";
import { FaAsterisk } from "react-icons/fa";
import styles from "./index.module.css";
import { tan_pearl, raleway_display } from "@/app/fonts";
import Link from "next/link";
import Marquee from "react-fast-marquee";
function MarqueeSection() {
  return (
    <>
      <div className={styles.marque_container}>
        <Link href={"/"} className={raleway_display.className}>
          {"/*"} CLIENTS
        </Link>
      </div>

      <div className={styles.marquee_section_container_desktop}>
        <div className={styles.line1}>
          <Marquee autoFill speed={60} loop={0}>
            <div className={styles.marquee_text_wrapper_1}>
              <p className={tan_pearl.className}>
                UNICORN
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                75 STOCKS{" "}
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                ART PARKK
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                APS DIGITECH
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                CANDES
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
            </div>
          </Marquee>
        </div>

        <div className={styles.line1}>
          <Marquee autoFill speed={80} loop={0} direction="right">
            <div className={styles.marquee_text_wrapper_2}>
              <p className={tan_pearl.className}>
                CITIZEN GEORGIA
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                ROBOSYNC{" "}
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>

              <p className={tan_pearl.className}>
                CYBER PAL
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                DECORAS USA
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
            </div>
          </Marquee>
        </div>

        <div className={styles.line1}>
          <Marquee autoFill speed={80} loop={0}>
            <div className={styles.marquee_text_wrapper_3}>
              <p className={tan_pearl.className}>
                DEYOR CAMPS
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                NATIONAL POKER SERIES{" "}
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                MERCHANT BAY
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
            </div>
          </Marquee>
        </div>

        <div className={styles.line1}>
          <Marquee autoFill speed={80} loop={0} direction="right">
            <div className={styles.marquee_text_wrapper_2}>
              <p className={tan_pearl.className}>
                CRYSTA IVF
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                TAXILA STONE{" "}
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                ARG TRADING
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                UNICAT
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
              <p className={tan_pearl.className}>
                TRAVASKO
                <FaAsterisk
                  size={22}
                  color={"#ddd5c9"}
                  style={{ margin: "25px" }}
                />
              </p>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default MarqueeSection;
