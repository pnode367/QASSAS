/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            900: '#0f172a',
            800: '#1e293b',
            700: '#334155',
            accent: '#d97706',
            light: '#f8fafc',
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Montserrat', 'sans-serif'],
          arabic: ['Tajawal', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }