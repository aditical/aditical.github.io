/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white-50': '#e6dbd8',
      'black-60': 'rgba(21, 21, 21 ,0.88)',
      'black-87': 'rgba(0, 0, 0 ,0.87)',
      'black-100': '#0a08085c',
      white: '#ffffff',
      'black-200': 'rgba(10, 10, 10, 0.90)',
      'black-300': '#232323',
      'black-400': '#212122',
      'black-bg': 'rgb(20 21 22)',
      'black-footer': '#323436',
      'blue-50': '#192e3b',
      'blue-100': '#1b313c',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      alata: ['Alata', 'sans-serif'],
      gayathri: ['Gayathri', 'sans-serif'],
      'encode-sans': ['Encode Sans Semi Expanded', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        popup: {
          '0%': { transform: 'translateY(50px) scale(0)' },
          '100%': { transform: 'translateY(0px) scale(1)' },
        },
        marquee: {
          ' 0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: ' 0',
          },
          '100%': {
            opacity: ' 1',
          },
        },
      },
      animation: {
        'waving-hand': 'wave 4s linear forwards',
        'popup-jam': 'popup 1s cubic-bezier(0.27,0.53,0.28,1.58) forwards',
        // 'flow-icons': 'marquee 60s linear infinite',
        // 'marquee-container': 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
