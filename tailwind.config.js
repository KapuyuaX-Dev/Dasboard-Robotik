/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hammersmit-one": ['"Hammersmith One"', "cursive"],
        gugi: ['"Gugi"', "cursive"],
      },
    },
  },
  plugins: [],
};
