/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.jsx"
],
  theme: {
    
    extend: {
        colors:{
            PrimaryColor:"#1D1D1D",
            SecondaryColor:"#2272FF"
            },
    },
  },
  plugins: [],
}

