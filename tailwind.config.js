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
          sage: '#5A664D',
          'sage-dark': '#434D39',
          'sage-deep': '#262E20',
          'sage-bg': '#E8EFE3',
          'sage-surface': '#F2F7EE',
          beige: '#E8EFE3',
          ivory: '#F2F7EE',
          warm: '#DFE7DA',
          taupe: '#BFCBB6',
          'taupe-light': '#E2EAD8',
          'taupe-dark': '#5A664D',
          gold: '#C5A059',
          'gold-light': '#DFC48A',
          'gold-dark': '#9E7E38',
          dark: '#1F1B18',
          charcoal: '#2E2824',
          muted: '#5A664D',
          border: 'rgba(90, 102, 77, 0.25)',
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
