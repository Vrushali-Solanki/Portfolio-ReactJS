/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#333333",
        "secondary" : "#FFD700",
        "tertiary" : "#F5F5F5",
      }
    },
  },
  plugins: [],
}