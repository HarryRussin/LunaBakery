/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        abril:["Abril-Fatface"],
        mont:["Montserrat","Quicksand","Sans"]
      },
      colors:{
        accent:{
          main:'#ED7201',
          light:'#EBA361'
        },
        cgrey:{
          light:'#A3A3A3',
          dark:'#5E544C',
          xlight:'#D9D9D9'
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}
