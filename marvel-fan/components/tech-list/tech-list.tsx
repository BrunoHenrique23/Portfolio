import Image from "next/image";
import { icons } from "./tech-list-icons";
import styles from "./tech-list.module.css";


export default function TechList() {

    return (
      <div className={styles.container}>
      {icons.map((item, index) => (
        <div key={item.id} className={`${styles.iconWrapper} ${index % 2 === 0 ? styles.lower : styles.higher}`}>
          <Image src={item.img} alt={item.title} className={styles.techIcons} />
          <p className={styles.iconTitle}>{item.title}</p>
        </div>
      ))}
    </div>
    
    
    );
}