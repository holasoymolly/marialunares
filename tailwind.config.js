/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Archivos en la carpeta src
    "./components/**/*.{js,ts,jsx,tsx}", // Componentes en carpeta components
    "./pages/**/*.{js,ts,jsx,tsx}", // Archivos en carpeta pages
    "./public/**/*.html", // Archivos HTML en carpeta public (opcional, si los tienes)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};