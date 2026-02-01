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
            900: '#0f172a', // Deep Blue/Black (Space)
            800: '#1e293b',
            700: '#334155',
            accent: '#d97706', // Amber/Gold (Minerals)
            light: '#f8fafc',
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Montserrat', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }