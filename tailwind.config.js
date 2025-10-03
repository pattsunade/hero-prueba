export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
       screens: {
        tablet: '768px',
        desktop: '1440px',
        movil: '390px',
      
       
      },
    },
  },
  plugins: [],
}
