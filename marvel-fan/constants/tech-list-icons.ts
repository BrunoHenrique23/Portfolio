import { StaticImageData } from "next/image"
import gmail from "../public/images/gmail.png"
import java from "../public/images/java.png"
import javascript from "../public/images/javascript.png"
import linkedin from "../public/images/linkedin.png"
import nextjs from "../public/images/nextjs.png"
import person from "../public/images/person.png"
import swift from "../public/images/swift.png"
import dev from "../public/images/dev.png"
import mind from "../public/images/mind.png"


interface TechListItem {
    id?: number;
    img?: StaticImageData; 
    title?: string;
    description?: string;
    items: string[];
}


export const icons =[
    {
        id: 1,
        title: "Swift",
        img: swift
    },
    {
        id: 2,
        title: "Java",
        img: java
    },
    {
        id: 3,
        title: "Javascript",
        img: javascript
    },
    {
        id: 4,
        title: "Next JS",
        img: nextjs
    },
]

export const contact = [
    {
        id: 1,
        title: "Linkedin",
        img: linkedin,
        link: "https://www.linkedin.com/in/brunosilva20/"
    },
    {
        id:2,
        title: "Gmail",
        img: gmail,
        link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
    }
]



export const techList: TechListItem[] = [
    {
      id: 1,
      img: person,
      title: "What I can do for you",
      description: "Faster, better products that your users love. Here's all the services I provide:",
      items: ["Design Strategy", "Web and Mobile App Design", "Front-end Development"]
    },
    {
        id: 2,
        title: "Applications I'm fluent in",
        description: "Every developer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
        items: ["Java Spring Boot", "Next Js", "Figma"],
        img: dev
    },
    {
        id: 3,
        title: "What you can expect",
        description: "I design products that are more than pretty. I make them shippable and usable.",
        items: ["Clean and functional", "Device and user friendly", "Efficient and maintainable"],
        img: mind
    }
  ];
  