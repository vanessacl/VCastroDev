/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e0aaff',
          50: '#fcf8ff',
          100: '#f7eeff',
          200: '#f0ddff',
          300: '#e0aaff',
          400: '#d985ff',
          500: '#c44dff',
          600: '#af2aff',
          700: '#9600ff',
          800: '#7a00cf',
          900: '#6500aa',
          950: '#3d0066',
        },
        background: '#f0eff4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};