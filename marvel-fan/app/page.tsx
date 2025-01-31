import Image from "next/image";
import styles from "./page.module.css";
import profilePic from "../public/foto.jpeg";
import TechList from "@/components/tech-list";

export default function Home() {
  return (
    <div className={styles.container1}>
      <div className={styles.title}><h1>Portifólio</h1></div>
      <div className={styles.picture}>
        <Image 
          src={profilePic} 
          alt={"Picture"}
          width={300}
          height={300}
          className={styles.imagePic}
        />
        <div className={styles.apresentation}>
        <h2>Bruno Henrique</h2>
        <p>Analista de Sistemas - Pleno</p>
        </div>
      </div>
      <div className={styles.container2}>
        <h1>Tecnologias</h1>    
      </div>
      <div className={styles.techList}>
       <TechList/>
      </div>
    </div>
  );
}