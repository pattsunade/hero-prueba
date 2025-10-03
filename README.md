Proyecto Banco de Chile - Hero Responsive
Componente de banner hero interactivo con carousel automático para mostrar ofertas y servicios empresariales.
 -Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

Node.js (versión 16 o superior)
npm o yarn como gestor de paquetes
Vue 3 instalado en tu proyecto

 -Instalación
1. Clonar o descargar el componente
Copia el archivo del componente en tu proyecto Vue:
bashsrc/
├── components/
│   └── Slider.vue
    └── Header.vue
    └── SubHeader.vue
└── assets/
    └── img/
        ├── persona.png
        ├── dispositivo.png
2. Instalar dependencias del proyecto
Si es un proyecto nuevo, primero inicializa Vue:
bash# Crear proyecto Vue 3
npm create vue@latest
Instala las dependencias:
bashnpm install
3. Configurar Tailwind CSS
Este componente utiliza Tailwind CSS. Si no lo tienes configurado:
bash# Instalar Tailwind y sus dependencias
npm install -D tailwindcss postcss autoprefixer

# Inicializar configuración
npx tailwindcss init -p
⚠️ Nota importante: Si encuentras errores de compatibilidad durante la instalación, instala específicamente Tailwind CSS versión 3:
bash# Instalar Tailwind CSS v3 (versión estable y compatible)
npm install -D tailwindcss@3 postcss autoprefixer

# Luego inicializar la configuración
npx tailwindcss init -p
Actualiza tailwind.config.js:
js/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
Agrega las directivas de Tailwind en src/style.css o src/index.css:
css@tailwind base;
@tailwind components;
@tailwind utilities;

 -Ejecución
Modo desarrollo
bashnpm run dev
Abre tu navegador en http://localhost:5173 (o el puerto que indique la consola)
