import Image from "next/image";
import styles from "./page.module.css";
import profilePic from "../public/images/foto.jpeg";
import TechList from "@/components/tech-list/tech-list";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <div className={styles.container1}>
      <div className={styles.title}><h1>Bem vindo (a) </h1></div>
      <div className={styles.picture}>
        <Image
          src={profilePic}
          alt={"Picture"}
          width={500}
          height={500}
          className={styles.imagePic} />
        <div className={styles.apresentation}>
          <h2>Bruno Henrique</h2>
          <p>Analista de Sistemas - Pleno</p>
        </div>
      </div>
      </div>

      <div className={styles.container2}>
        <h1>Tecnologias</h1>
      </div>
      <div className={styles.techList}>
        <TechList />
      </div>
      <div className={styles.container3}>
        <h1>Projetos</h1>
      </div>
      </>
  );
}