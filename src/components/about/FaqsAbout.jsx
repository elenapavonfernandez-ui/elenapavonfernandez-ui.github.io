import React, { useState } from "react";

// 1. Iconos actualizados para que coincidan EXACTAMENTE con las llaves de 'skills'
const CategoryIcons = {
  "¿Qué tecnologías uso?": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00FFAB" className="h-6 w-6 opacity-80">
      <path d="M5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3ZM12 13L16 9H8L12 13Z"></path>
    </svg>
  ),
  "Mi Experiencia": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00FFAB" className="h-6 w-6 opacity-80">
      <path d="M7 5V2H17V5H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V5H7ZM9 4V5H15V4H9ZM4 7V19H20V7H4Z"></path>
    </svg>
  ),
  "Mi formacion": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00FFAB" className="h-6 w-6 opacity-80">
      <path d="M12 2L1 7L12 12L23 7L12 2ZM12 15.5L4.5 12.09V14.09L12 17.5L19.5 14.09V12.09L12 15.5Z"></path>
    </svg>
  ),
  "¿Cómo trabajo en equipo?": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00FFAB" className="h-6 w-6 opacity-80">
      <path d="M13 14.0622V22H11V14.0622C7.05369 13.5601 4 10.1362 4 6V5H6V6C6 9.31371 8.68629 12 12 12C15.3137 12 18 9.31371 18 6V5H20V6C20 10.1362 16.9463 13.5601 13 14.0622Z"></path>
    </svg>
  ),
  "Metodolgias Agiles": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00FFAB" className="h-6 w-6 opacity-80">
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12H17V10H13V7H11V10H7V12H11V17H13V12Z"></path>
    </svg>
  )
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "¿Qué tecnologías uso?": [
      "Actualmente trabajo con tecnologías como Python, SQL, Power BI, Tableau, Excel y utilizo librerías como Pandas, Seaborn, Matplotlib o Numpy entre otras.",
    ],
    "Mi Experiencia": [
      "Tengo experiencia trabajando en startups y en equipos multidisciplinares, recopilando y extrayendo datos y analizándonos para tomar decisiones estratégicas.",
    ],
    "Mi formacion": [
      "Graduada en Periodismo y Técnico Superior en Realización Audiovisual. Especializada como Data Analyst mediante un bootcamp intensivo de 638 horas. Aprendizaje continuo y autodidacta.",
    ],
    "¿Cómo trabajo en equipo?": [
      "Experiencia en equipos multidisciplinares bajo metodologías ágiles (Scrum). Control de versiones con Git/GitHub y gestión con Notion/Sharepoint.",
    ],
    "Metodolgias Agiles": [
      "Participación en Sprints semanales, gestión de tableros Kanban (Microsoft Planner) y establecimiento de KPIs departamentales.",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center text-left mx-auto max-w-6xl px-4">
      <div className="site-container mt-10 w-full">
        {/* Título con tus colores: Magenta y sombra Verde */}
        <h2 className="text-4xl font-bold flex flex-col items-center gap-6 text-center text-white md:flex-row md:items-center md:text-end">
          <span className="hidden h-1.5 grow rounded-lg bg-[#B900BC] drop-shadow-[2px_2px_0_#00FFAB] md:block"></span>
          <span className="drop-shadow-[2px_2px_0_#B900BC]">Más Sobre Mí</span>
        </h2>

        <ul className="mt-8 space-y-4 text-lg">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-gray-800 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all border border-white/5 drop-shadow-[3px_3px_0_#B900BC]"
              >
                <div className="flex items-center gap-4 p-5">
                  {/* Aquí se renderiza el icono si coincide la llave */}
                  {CategoryIcons[category]}
                  
                  <div className="flex grow items-center justify-between gap-2">
                    <span className="block text-lg text-white font-bold tracking-wide">
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#B900BC"
                      className={`h-7 w-7 transform transition-transform duration-300 ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-5 transition-all duration-500 ease-in-out ${
                    openItem === category
                      ? "max-h-[500px] pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                    {items[0]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;