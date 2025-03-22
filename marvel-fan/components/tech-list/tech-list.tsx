'use client'
import Image from "next/image";
import { graduation, icons, techList } from "../../constants/tech-list-icons";
import styles from "./tech-list.module.css";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TechList() {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <>

      <div data-aos="fade-up" className={styles.container}>
        {icons.map((item, index) => (
          <div key={item.id} className={`${styles.iconWrapper} ${index % 2 === 0 ? styles.lower : styles.higher}`}>
            <Image src={item.img} alt={item.title} className={styles.techIcons} />
            <p className={styles.iconTitle}>{item.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.listContainer}>
        {techList.map((section, index) => (
          <div key={section.id} className={styles.listItem}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}><strong>{item}</strong></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}