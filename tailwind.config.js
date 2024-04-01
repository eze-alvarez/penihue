/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'cabana-smart': "url('/public/cabaña smart.jpg')",
        // 'cabana-tablet': "url('./public/cabaña tablet.jpg')",
        // 'cabana-desk': "url('./public/cabaña desktop.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors:{
        "penihue": "#318146",
        "penihue-side":"#2a703c",
        "penihue-fondo":"#e3ece4",
        "penihue-text":"#777777"
      }
    },
  },
  plugins: [],
};
