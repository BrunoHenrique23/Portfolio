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

export default function Home() {

  // const [form, setForm] = React.useState(false)


  return (
    <>
      <div>
      </div>
      <div className={styles.container1}>
        <div className={styles.image1}>
          <Image
            src={image}
            alt={""}
            className={styles.imagePic} />
        </div>
        <div className={styles.apresentation}>
          <Image
            src={avatar}
            alt={""}
            className={styles.avatarPic} />
          <h2 className={styles.name}>Bruno Henrique</h2>
          <p className={styles.subTitle}>Analista de Sistemas - Pleno</p>
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