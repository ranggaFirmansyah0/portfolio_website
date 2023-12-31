/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '480px',
      'x-sm': '690px',
      'md': '768px',
      'xl': '1400px'
    }
  },
  plugins: [],
}