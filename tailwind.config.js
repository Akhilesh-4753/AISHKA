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
          beige: '#FAF7F2',
          ivory: '#F5F3EF',
          warm: '#EFECE6',
          taupe: '#C8B6A6',
          'taupe-light': '#E6DDD4',
          'taupe-dark': '#8E7B6C',
          gold: '#C5A059',
          'gold-light': '#DFC48A',
          'gold-dark': '#9E7E38',
          dark: '#1F1B18',
          charcoal: '#2E2824',
          muted: '#6E665F',
          border: 'rgba(200, 182, 166, 0.35)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      boxShadow: {
        luxury: '0 20px 40px -15px rgba(31, 27, 24, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(31, 27, 24, 0.16)',
        subtle: '0 4px 20px -2px rgba(31, 27, 24, 0.04)',
      },
    },
  },
  plugins: [],
}
