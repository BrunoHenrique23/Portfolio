import swift from "../../public/images/swift.png"
import java from "../../public/images/java.png"
import javascript from "../../public/images/javascript.png"
import nextjs from "../../public/images/nextjs.png"
import mobile from "../../public/images/iphone.png"
import health from "../../public/images/saude.png"
import food from "../../public/images/food.png"
import linkedin from "../../public/images/linkedin.png"
import gmail from "../../public/images/gmail.png"
import { title } from "process"
import fiap from "../../public/images/fiap.jpg";
import atos from "../../public/images/atos-logo-0.png"



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


export const projects = [
    {
        id: 1,
        title: "Participação como analista de sistemas, e desenvolvedor back-end do aplicativo, realizando features como busca de concessionárias mais próximas.",
        img: mobile
    },
    {
        id: 2,
        title: "Participação como analista de sistemas, e desenvolvedor back-end do aplicativo, realizando features como busca de concessionárias mais próximas.",
        img: health
    },
    // {
    //     id: 3,
    //     title: "Swift UI",
    //     img: food
    // }
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