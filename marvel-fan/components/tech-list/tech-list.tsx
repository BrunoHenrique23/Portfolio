import Image from "next/image";
import { icons } from "./tech-list-icons";
import styles from "./tech-list.module.css";


export default function TechList() {

    return (
        <div className={styles.container}>
            {icons.map((item) => (
                 <div key={item.id}>
                 <Image
                   src={item.img}
                   alt={item.title}
                   className={styles.techIcons}
                 />
               </div>
            ))}
        </div>
    );
}