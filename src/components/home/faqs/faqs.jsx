import React, { useState } from "react";

const CategoryIcons = {
  "¿Qué tecnologías uso?": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#00FFAB] h-6 w-6 opacity-80">
      <path d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM5 5V19H19V5H5ZM7 7H11V11H7V7ZM13 7H17V9H13V7ZM13 10H17V12H13V10ZM7 13H11V17H7V13ZM13 13H17V15H13V13ZM13 16H17V17H13V16Z"></path>
    </svg>
  ),
  "Mi Formación": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#00FFAB] h-6 w-6 opacity-80">
      <path d="M12 2L2 7L12 12L22 7L12 2ZM2 12L12 17L22 12V14.5L12 19.5L2 14.5V12ZM12 14.5L12 14.5L12 14.5L12 14.5Z"></path>
    </svg>
  ),
  "Mi Enfoque": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#00FFAB] h-6 w-6 opacity-80">
      <path d="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM13 9V3H21V9H13ZM3 21V15H11V21H3Z"></path>
    </svg>
  ),
  "Metodologías de trabajo": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#00FFAB] h-6 w-6 opacity-80">
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H13V17H11V14H7V12H11V9H13V12Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "¿Qué tecnologías uso?": [
      "Me especializo en el análisis y visualización de datos utilizando Python como lenguaje principal, apoyándome en librerías como Pandas, NumPy y Matplotlib. Para la gestión de bases de datos utilizo SQL (MySQL) y para la creación de dashboards dinámicos trabajo con herramientas de Business Intelligence como Tableau y Excel avanzado.",
    ],
    "Mi Formación": [
      "Mi base técnica proviene del aprendizaje constante en análisis de datos y herramientas estadísticas. He complementado mi perfil con formación específica en herramientas de visualización y manipulación de grandes volúmenes de datos, lo que me permite extraer insights de valor y presentarlos de forma clara y estratégica.",
    ],
    "Mi Enfoque": [
      "Mi trabajo se centra en transformar datos complejos en narrativas visuales comprensibles. Creo firmemente que los datos solo son útiles cuando pueden contar una historia que facilite la toma de decisiones. Por ello, cuido tanto el rigor del análisis como la claridad estética de la visualización.",
    ],
    "