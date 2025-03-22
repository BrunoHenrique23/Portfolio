import TechList from "@/components/tech-list/tech-list";
import Image from "next/image";
import avatar from "../public/images/avatar.jpeg";
import styles from "./page.module.css";
import email from "../public/images/email.png"

export default function Home() {


  return (
    <div className={styles.master}>
      <div className={styles.container1}>
        <div className={styles.homeBar}>
          <h1> <a className={styles.logo} href="#">Dev Portfolio</a></h1>
          <nav className={styles.navMenu}>
            <ul className={styles.itensNav}>
              <li><a className={styles.item} href="#about">About</a></li>
              <li><a className={styles.item} href="#projects">Projects</a> </li>
              <li><a className={styles.item} href="#contact">Contact <Image className={styles.emailIcon} src={email} alt={""} /></a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.apresentation}>
          <div className={styles.title}>
            <h2 className={styles.name}>
              I develop solutions that optimize processes and drive businesses forward.
            </h2>
            <p className={styles.subTitle}>
              Hi! I'm Bruno Henrique, a Systems Analyst. I develop efficient technological solutions to make systems smarter and more agile.
            </p>
            <button className={styles.buttonCv}>Download CV</button>
          </div>
          <Image src={avatar} alt={""} className={styles.avatarPic} />
        </div>

      </div>

      <div className={styles.container2}>
        <h1>Technologies</h1>
      </div>
      <div className={styles.techList}>
        <TechList />
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}