/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4',
          dark: '#6B46C1',
          
        },
        main: {
          DEFAULT: '#EFDECA'
        },
        background: {
          DEFAULT: '#201F20',
        },
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#4A4A4A',
          500: '#666666',
          600: '#718096',
          700: '#4A5568',
          800: '#999999',
          900: '#1A202C',
        }
      }
    }
  },
  plugins: [],
}
