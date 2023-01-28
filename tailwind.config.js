/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e5e7eb",

          "secondary": "#eeb644",

          "accent": "#37CDBE",

          "neutral": "#1b1b1c",

          "base-100": "#FFFFFF",

          "banner": "#d8d8d8",

          "bannerbtn": "#d8d8d8",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}