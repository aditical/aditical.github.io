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
      'black-60': 'rgba(21, 21, 21 ,0.6)',
      'black-87': 'rgba(0, 0, 0 ,0.87)',
      'black-100': '#0a08085c',
      white: '#ffffff',
      'black-200': 'rgba(10, 10, 10, 0.90)',
      'black-300': '#232323',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
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
        firstIcon: {
          '0%': { transform: 'translate(0px) translateY(0px)' },
          '40%': { transform: 'translateY(100px)' },
          '60%': { transform: 'translate(60px)' },
          '100%': { transform: 'translateY(-20px)' },
        },
        secondIcon: {
          '0%': { transform: 'translate(40px) translateY(40px)' },
          '40%': { transform: 'translateY(200px) translate(40px)' },
          '60%': { transform: 'translate(80px)' },
          '100%': { transform: 'translateY(140px) translate(110px)' },
        },
        thirdIcon: {
          '0%': { transform: 'translate(80px) translateY(120px)' },
          '40%': { transform: 'translateY(280px) translate(60px)' },
          '60%': { transform: 'translate(20px) translateY(60px)' },
          '100%': { transform: 'translateY(-30px) translate(60px)' },
        },
        fourthIcon: {
          '0%': { transform: 'translate(120px) translateY(40px)' },
          '40%': { transform: 'translateY(0px) translate(20px)' },
          '60%': { transform: 'translate(40px) translateY(160px)' },
          '100%': { transform: 'translateY(10px) translate(40px)' },
        },
        fifthIcon: {
          '0%': { transform: 'translate(160px)' },
          '40%': { transform: 'translateY(80px)' },
          '60%': { transform: 'translate(0px)' },
          '100%': { transform: 'translateY(20px)' },
        },
        sixthIcon: {
          '0%': { transform: 'translate(140px) translateY(20px)' },
          '40%': { transform: 'translateY(120px)' },
          '60%': { transform: 'translate(40px)' },
          '100%': { transform: 'translateY(10px)' },
        },
        seventhIcon: {
          '0%': { transform: 'translateY(160px)' },
          '40%': { transform: 'translate(120px)' },
          '60%': { transform: 'translateY(160px)' },
          '100%': { transform: 'translate(120px)' },
        },
      },
      animation: {
        'first-icon': 'firstIcon 30s infinite linear',
        'second-icon': 'secondIcon 30s infinite linear',
        'third-icon': 'thirdIcon 30s infinite linear',
        'fourth-icon': 'fourthIcon 30s infinite linear',
        'fifth-icon': 'fifthIcon 30s infinite linear',
        'sixth-icon': 'sixthIcon 30s infinite linear',
        'seventh-icon': 'seventhIcon 30s infinite linear',
        'waving-hand': 'wave 4s linear forwards',
      },
    },
  },
  plugins: [],
};
