// import classNames from "classnames";
import { ProjectTypes } from "./types";


export const navData = [ "About", "Works", "Contact" ]

export const projects : ProjectTypes[] = [
    {
        title : "Note App",
        description : "Simply note app add notes and save it",
        tech : [ "Next js", "javaScript", "TailwindCSS" ],
        live : 'https://note-app-jss.vercel.app/',
        code : 'https://github.com/MulhamShaker/Note-App',
        thumnail : "/images/projects/note-app.png",
        // featured : true
    },
    // {
    //     title : "E-Shop",
    //     description : "E-Commerce Shop",
    //     tech : [ "Django", "Python", "Css","Html"],
    //     live : '',
    //     code : 'https://github.com/MulhamShaker/E-Shop',
    //     thumnail : "/images/projects/e-shop.png",
    //     // featured : true
    // },
]