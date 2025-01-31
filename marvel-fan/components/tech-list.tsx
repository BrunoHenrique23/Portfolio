import React from "react";
import styles from "./tech-list.module.css";



export default function TechList() {
    const languages = ["Swift", "Next JS", "Java", "Javascript"]; 

    return (
        <div className={styles.container}>
            {languages.map((language, index) => (
                <div key={index} className={styles.languageItem}>
                    {language}
                </div>
            ))}
        </div>
    );
}