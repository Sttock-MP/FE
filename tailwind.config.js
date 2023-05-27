/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBrown: '#665A48',
        brown: '#9F8772',
        beige: '#EBE4D9',
        ivory: '#F6F4EF',
        gray: '#E2DED8',
        borderColor: '#EbE4D9',
      },
    },
    plugins: [],
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif'],
    },
  },
}
