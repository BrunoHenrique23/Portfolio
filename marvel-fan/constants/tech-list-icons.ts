import gmail from "../public/images/gmail.png"
import java from "../public/images/java.png"
import javascript from "../public/images/javascript.png"
import linkedin from "../public/images/linkedin.png"
import nextjs from "../public/images/nextjs.png"
import swift from "../public/images/swift.png"
import atos from "../public/images/atos-logo-0.png"
import fiap from "../public/images/fiap.jpg"
import { title } from "process"



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

export const graduation = [
    {
        id: 1,
        title: "Graduado em sistemas da informação em 2024 pela universidade FIAP, com foco em programação e gestão ágeis de projetos.",
        img: fiap,
        link: "https://www.fiap.com.br/graduacao/bacharelado/sistemas-de-informacao/"
    },
    {
        id: 2,
        title: "Atualmente trabalhando na empresa Atos Brasil, como desenvolvedor a 3 anos.",
        img: atos,
        link: "https://atos.net/en/"
    }
]


export const techList = [
    {
      id: 1,
      title: "What I can do for you",
      description: "Faster, better products that your users love. Here's all the services I provide:",
      items: ["Design Strategy", "Web and Mobile App Design", "Front-end Development"]
    },
    {
      id: 2,
      title: "Applications I'm fluent in",
      description: "Every developer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
      items: ["Java Spring Boot", "Next Js", "Figma"]
    },
    {
      id: 3,
      title: "What you can expect",
      description: "I design products that are more than pretty. I make them shippable and usable.",
      items: ["Clean and functional", "Device and user friendly", "Efficient and maintainable"]
    }
  ];
  