import React from "react";
import styles from "../styles/LoggedininPic.module.css";

const LoggedinPic = ({ src, height = 45, text }) => {
    return (
        <span>
            <img
                className={styles.LoggedinPic}
                src={src}
                height={height}
                width={height}
                alt=""
            />
            {text}
        </span>
    );
};

export default LoggedinPic;