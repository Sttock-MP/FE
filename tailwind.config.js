/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBrown: '#665A48',
        Brown: '#9F8772',
        Beige: '#EBE4D9',
        Ivory: '#F6F4EF',
        Grey: '#E2DED8',
      },
    },
    plugins: [],
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif'],
    },
  },
}
