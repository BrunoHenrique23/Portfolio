import Image from "next/image";
import styles from "./page.module.css";
import image from "../public/images/mac.jpg";
import TechList from "@/components/tech-list/tech-list";
import avatar from "../public/images/avatar.jpeg"
import Head from "next/head";
import ProjectList from "@/components/project-list/project-list";
import ContactList from "@/components/footer/contact-list";
import fiap from "../public/images/fiap.jpg";
import React from "react";
import Skills from "@/components/skills/skills";

export default function Home() {

  // const [form, setForm] = React.useState(false)


  return (
    <>
      <div className={styles.container1}>

        <div className={styles.apresentation}>
          <div className={styles.title}>
          <h2 className={styles.name}>Bruno Henrique - Soluções em Tecnologia</h2>
          <p className={styles.subTitle}>Analista de Sistemas Pleno, apaixonado por tecnologia e inovação. Desenvolvo soluções eficientes para otimizar processos e melhorar a experiência do usuário.</p>
          </div>
          <Image
            src={avatar}
            alt={""}
            className={styles.avatarPic} />
        </div>



      </div>

      <div className={styles.container2}>
        <h1>Tecnologias</h1>
      </div>
      <div className={styles.techList}>
        <TechList />
      </div>

      <footer className={styles.footer}>
        <div className={styles.container3}>
          <div className={styles.contactTitle}>
            <h1 className={styles.title}>Contato</h1>
          </div>
          <ContactList />
        </div>
      </footer>
    </>
  );
}