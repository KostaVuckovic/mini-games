/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-pink': '#F72585',
        magenta: '#B5179E',
        purple: '#7209B7',
        'deep-purple': '#560BAD',
        'dark-blueish-purple': '#480CA8',
        'darker-blueish-purple': '#3A0CA3',
        'medium-blue': '#3F37C9',
        'bright-blue': '#4361EE',
        'sky-blue': '#4895EF',
        turquoise: '#4CC9F0',
      },
    },
  },
  plugins: [],
};
