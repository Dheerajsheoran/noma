/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sergio-trendy": ["sergio-trendy", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },


    },
  },
  plugins: [],
};


