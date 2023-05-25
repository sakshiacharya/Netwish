/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'bg-pattern': "url('./public/bgmain.png')"
        },
        width: {
          '10/12': '87.333333%',
        }
      },
    }, 
    plugins: [],
  } 