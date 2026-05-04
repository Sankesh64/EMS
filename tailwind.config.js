/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A88AED',
          50:  '#F5F0FD',
          100: '#EDE3FB',
          200: '#D8C7F7',
          300: '#C3ABF3',
          400: '#B89BF0',
          500: '#A88AED',
          600: '#8F6AE6',
          700: '#7650DD',
          800: '#5C38CC',
          900: '#4527A8',
        },
        cream: {
          DEFAULT: '#FFFEEC',
          muted: 'rgba(255,254,236,0.55)',
          faint: 'rgba(255,254,236,0.15)',
          subtle: 'rgba(255,254,236,0.08)',
        },
      },
    },
  },
  plugins: [],
}
