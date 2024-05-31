import React from "react";
import styles from "./index.module.css";


export const Footer = () => {
    return <footer classname={styles.footer}>
        <span className={styles.contact}>Contact</span>
        <div classname={styles.cards}>
            <div className={styles.info}>

                <div className={styles.firstrow}> 
                    <div className={styles.card}>
                        <span className={styles.titleText}>Phone</span>
                        <span className={styles.fillText}>+49 999 999 99 99</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.titleText}>Socials</span>
                        {/* <IconInsta/>
                        <IconWhatsUp/> */}
                    </div>
                </div>

                <div className={styles.secondrow}>
                    <div className={styles.card}>
                        <span className={styles.titleText}>Address</span>
                        <span className={styles.fillText}>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.titleText}>Working Hours</span>
                        <span className={styles.fillText}>24 hours a day</span>
                    </div>
                </div>
            </div>

        </div>

    </footer>;
};