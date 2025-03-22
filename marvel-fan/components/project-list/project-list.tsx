import React from "react"
import styles from "./project-list.module.css"
import Image from "next/image";
import { projects } from "../../constants/tech-list-icons";


export default function ProjectList (){

    return(
        <>
    <div className={styles.container}>
  {projects.map((item, index) => (
    <div 
      key={item.id} 
      className={`${styles.iconWrapper} ${index % 2 === 0 ? styles.left : styles.right}`}
    >
      <Image src={item.img} alt={item.title} className={styles.techIcons} />
      <p className={styles.iconTitle}>{item.title}</p>
    </div>
  ))}
</div>

        </>
    )
}