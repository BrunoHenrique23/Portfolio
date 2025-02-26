'use client'
import Image from "next/image";
import { graduation, icons } from "./tech-list-icons";
import styles from "./tech-list.module.css";
import React from "react";


export default function TechList() {


  return (

    <div className={styles.container}>
      {icons.map((item, index) => (
        <div key={item.id} className={`${styles.iconWrapper} ${index % 2 === 0 ? styles.lower : styles.higher}`}>
          <Image src={item.img} alt={item.title} className={styles.techIcons} />
          <p className={styles.iconTitle}>{item.title}</p>
        </div>
      ))}
      
      <div className={styles.graduationContainer}>
        {graduation.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.iconWrapperGra} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <Image src={item.img} alt={item.title} className={styles.graduationIcons} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>


    </div>



  );
}