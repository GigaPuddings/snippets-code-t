/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        base1: 'var(--bg-base1)',
        base2: 'var(--bg-base2)',
        active1: 'var(--bg-active1)',
        active2: 'var(--bg-active2)'
      },
      textColor: {
        color1: 'var(--text-color1)',
        color2: 'var(--text-color2)',
        colorHover: 'var(--text-color-hover)',
        colorActive: 'var(--text-color-active)'
      }
    }
  },
  plugins: []
};
