import solarplant from "../assets/img-projects/solarplant.png";
import analisisrotacion from "../assets/img-projects/analisisrotacion.png";
import Friends from "../assets/img-projects/Friends.png";
import Sakila from "../assets/img-projects/Sakila.png";
import SpotifyApi from "../assets/img-projects/SpotifyApi.png";
import TheSimpsons from "../assets/img-projects/TheSimpsons.png";


export const proyectos = [
  {
    titulo: "Análisis de la serie Friends",
    descripcion:
      "Análisis del éxito de la serie Friends, limpieza y visualización usando Power BI y DAX",
    imagen: Friends.src,
    tecnologias: ["Power BI", "DAX"],
    codigo: "https://github.com/elenapavonfernandez-ui/friends-PowerBI",
    categoria: "BI",
  },
  {
    titulo: "Solar Energy proyect",
    descripcion:
      "Solar energy EDA and data cleaning & visualization project. Compares the efficiency of two solar plants using Python, Pandas, Seaborn and Matplotlib",
    imagen: solarplant.src,
    tecnologias: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    codigo: "https://github.com/elenapavonfernandez-ui/solar-energy-Python",
    categoria: "Python",
  },
  {
    titulo: "Análisis rotación",
    descripcion:
      "Análisis de los motivos de rotación dentro de una empresa. EDA, limpieza y visualización con Seaborn y Matplotlib",
    imagen: analisisrotacion.src,
    tecnologias: ["Pyhon", "Seaborn", "Matplotlib", "Pandas"],
    codigo: "https://github.com/elenapavonfernandez-ui/analisis-rotacion-Python",
    categoria: "Python",
  },
  {
    titulo: "Base de datos Sakila",
    descripcion:
      "Proyecto base de datos de un videoclub utilizando SQL",
    imagen: Sakila.src,
    tecnologias: ["SQL"],
    codigo: "https://github.com/elenapavonfernandez-ui/videoclub-sakila-SQL",
    categoria: "SQL",
  },
  {
    titulo: "Análisis Musical",
    descripcion:
      "Extracción y análisis de datos musicales (2000 - 2005) con Python, SQL y APIs de Spotify y Last.fm.",
    imagen: SpotifyApi.src,
    tecnologias: ["Python", "SQL", "Apis"],
    codigo: "https://github.com/elenapavonfernandez-ui/analisis-musical-APIs-spotify-lastfm",
    categoria: "SQL","Python"
  },
  {
    titulo: "Análisis The Simpsons ",
    descripcion:
      "Análisis éxito de la serie The Simpons realizando un EDA en python y visualización en Tableau",
    imagen: TheSimpsons.src,
    tecnologias: ["Python", "Tableau"],
    codigo: "https://github.com/elenapavonfernandez-ui/los-simpson-Tableau",
    categoria: "Python", "Tableau"
  },

];
