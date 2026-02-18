// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // 1. La URL de tu sitio (Indispensable para que funcionen los enlaces)
  site: 'https://elenapavonfernandez-ui.github.io',
  
  // 2. La ruta base (Al ser elenapavonfernandez-ui.github.io, usamos la raíz)
  base: '/', 

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});