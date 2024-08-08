/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Grey Qo","sans-serif"],
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        oswald:["Oswald"]
      },
    },
  },
  plugins: [],
}