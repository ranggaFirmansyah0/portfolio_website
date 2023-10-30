/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '500px',
      'md': '768px',
      'xl': '1400px'
    }
  },
  plugins: [],
}