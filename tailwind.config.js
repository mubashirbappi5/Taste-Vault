/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primari: '#0BE58A',
        dark2:'#150B2B99'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}