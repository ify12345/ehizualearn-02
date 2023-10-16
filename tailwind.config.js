/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    backgroundColor: {
      'blue-opacity-28': 'rgba(19, 69, 116, 0.28)',
    },
},

}
