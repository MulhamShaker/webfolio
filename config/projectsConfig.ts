// import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
// export const cx = classNames;

// nav data
export const navData = [ "About", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Note App",
        description : "Simply note app add notes and save it",
        tech : [ "Next js", "TypeScript", "BootStrap" ],
        live : 'https://note-app-inky-seven.vercel.app/',
        code : 'https://github.com/MulhamShaker/noteApp',
        thumnail : "/images/projects/noteapp.png",
        // featured : true
    },

    {
        title : "AI Assistant",
        description : "Artificial intelligence (AI) assistant ",
        tech : [ "Python" ],
        code : 'https://github.com/MulhamShaker/OpenAI',
        live : '',
        thumnail : "/images/projects/openai.jpg",
        // featured : true
    },

    {
        title : "Barista Program",
        description : "A barista simulation",
        tech : [ "Python" ],
        code : 'https://github.com/MulhamShaker/PythonBarista',
        live : '',
        thumnail : "/images/projects/barista.jpg",
        // featured : true
    },

    {
        title : "PanDiv Website",
        description : "Our Company Website",
        tech : [ "Next js", "Bootstrap", "Sass", "TypeScript"],
        live : 'https://www.pandiv.com/',
        thumnail : "/images/projects/pandiv.png",
        featured : true
    },
    {
        title : "Contact Page",
        description : "Contact E-mail Form",
        tech : [ "Next js", "Tailwind","JavaScript"],
        live : 'https://sign-form-up.vercel.app/',
        code : 'https://github.com/MulhamShaker/SignUp-Form',
        thumnail : "/images/projects/form.png",
        // featured : true
    },
    {
        title : "E-Shop",
        description : "E-Commerce Shop",
        tech : [ "Django", "Python", "Css","Html"],
        live : '',
        code : 'https://github.com/MulhamShaker/E-Shop',
        thumnail : "/images/projects/e-shop.png",
        // featured : true
    },
    {
        title : "Web-Folio",
        description : "My Portfolio",
        tech : [ "NextJs", "TypeScripts", "Tailwind"],
        live : 'https://webfolio-mul.vercel.app/',
        code : 'https://github.com/MulhamShaker/webfolio',
        thumnail : "/images/projects/web-folio.png",
        // featured : true
    },
]