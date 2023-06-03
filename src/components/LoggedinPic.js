import React from "react";
import styles from "../styles/LoggedininPic.module.css";

const LoggedinPic = ({ src, height = 45, text }) => {
    return (
        <span>
            <img
                className={styles.LoggedinPic}
                src={"https://cdn-icons-png.flaticon.com/512/599/599305.png"}
                height={height}
                width={height}

            />
            {text}
        </span>
    );
};

export default LoggedinPic