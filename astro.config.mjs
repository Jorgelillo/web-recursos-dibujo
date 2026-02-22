// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // AÑADE ESTA LÍNEA CON TU DOMINIO REAL:
  site: 'https://sunny-trifle-2ddb9e.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  }
});