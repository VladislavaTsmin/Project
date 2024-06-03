import React from "react";
import styles from './index.module.scss';

export const Map = () => {
    return (
        <iframe
            className={styles.map}
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409089557189!2d13.372469776265694!3d52.50793529049532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2s!4v1715356710648!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};
