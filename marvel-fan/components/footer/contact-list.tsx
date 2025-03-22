
'use client'
import React from "react"
import styles from "./contact-list.module.css"
import Image from "next/image";
import { contact } from "../../constants/tech-list-icons";
import { useRouter } from 'next/navigation'



export default function ContactList (){

    const router = useRouter()


    return(
        <>
    <div className={styles.container}>
  {contact.map((item, index) => (
    <div key={item.id} className={styles.iconWrapper}>
      <Image src={item.img} alt={item.title} className={styles.techIcons} onClick={() => router.push(item.link)}/>
      <p className={styles.iconTitle}>{item.title}</p>
    </div>
  ))}
</div>
        </>
    )
}