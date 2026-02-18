import solarplant from "../assets/img-projects/solarplant.png";
import analisisrotacion from "../assets/img-projects/analisisrotacion.png";
import Friends from "../assets/img-projects/Friends.png";
import Sakila from "../assets/img-projects/Sakila.png";
import SpotifyApi from "../assets/img-projects/SpotifyApi.png";
import TheSimpsons from "../assets/img-projects/TheSimpsons.png";


export const proyectos = [
  {
    titulo: "Vintage Tone",
    descripcion:
      "Comercio electrónico completo con carrito de compras, autenticación de usuarios jwt, panel de Admin, Blog, y mas. Stack: Vue.Js - Node.js - Express - MongoDB - Tailwind - Cloudinary.",
    imagen: Friends.src,
    tecnologias: ["Vue.js", "Tailwind", "Express", "MongoDB"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/VintageTone-Front-Vue.git",
    categoria: "fullstack",
  },
  {
    titulo: "React Tiendita",
    descripcion:
      "E-commerce full stack desarrollado con React, Node.js y MongoDB. Incluye autenticación, carrito de compras, búsqueda, categorías, reseñas, etc.",
    imagen: solarplant.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/React-E-commerce.git",
    categoria: "fullstack",
  },
  {
    titulo: "Astro Ecommerce",
    descripcion:
      "E-commerce frontend desarrollado con Astro y React. Incluye carrito de compras, categorías, y diseño responsivo.",
    imagen: analisisrotacion.src,
    tecnologias: ["React", "Astro", "Tailwind", "daisyUI"],
    demo: "https://e-commer-astro.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/E-commer-Astro.git",
    categoria: "frontend",
  },
  {
    titulo: "App organizacion",
    descripcion:
      "App full-stack con funciones CRUD, creacion de tableros y listas, autentificacion de usuarios, desarrollada con MERN stack.",
    imagen: Sakila.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
    categoria: "fullstack",
  },
  {
    titulo: "CV Builder",
    descripcion:
      "Generador de Currículum multi-idioma profesional siguiendo el formato recomendado por Harvard y amigable con los ATS. ",
    imagen: SpotifyApi.src,
    tecnologias: ["React", "contextAPI", "tailwind", "i18n"],
    demo: "https://cv-builder-pi-three.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/CV-Builder.git",
    categoria: "frontend",
  },
  {
    titulo: "E-commerce Urban Style",
    descripcion:
      "E-commerce funcional de ropa y accesorios, con carrito de compras categorias y pasarela de pago desarrollado en React.",
    imagen: TheSimpsons.src,
    tecnologias: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: "fullstack",
  },

];
