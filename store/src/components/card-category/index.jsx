import React from "react";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";

export const CardCategory = ({titel, image}) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <img scr={BASE_URL + image} alt="card" className={styles.cardImage}/>
                </div>
                <div className={styles.info} > 
                    {titel}
                </div>
            </div>
        </>
    )
};

