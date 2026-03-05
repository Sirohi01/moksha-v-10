/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#F9F3E8',
          200: '#F2E6CF',
          300: '#E8D5B0',
          400: '#D9BC89',
          500: '#C9A265',
        },
        gold: {
          100: '#F5E6C8',
          200: '#E8CC8A',
          300: '#D4A843',
          400: '#B8922E',
          500: '#9A7A1F',
        },
        earth: {
          100: '#E8DDD0',
          200: '#C9B49A',
          300: '#A68B6A',
          400: '#7D6347',
          500: '#5C4530',
          600: '#3D2D1C',
        },
        sage: {
          100: '#E8EDE6',
          200: '#C4D0C0',
          300: '#8FAB87',
          400: '#5A7D52',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        sans: ['Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FDFAF5 0%, #F2E6CF 50%, #E8D5B0 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E8CC8A 0%, #D4A843 100%)',
        'earth-gradient': 'linear-gradient(135deg, #5C4530 0%, #3D2D1C 100%)',
      },
      boxShadow: {
        'warm': '0 4px 24px rgba(180, 140, 80, 0.12)',
        'warm-lg': '0 8px 40px rgba(180, 140, 80, 0.18)',
        'soft': '0 2px 16px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'flame': 'flame 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flame: {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1)' },
          '50%': { transform: 'scaleY(1.08) scaleX(0.96)' },
        },
      },
    },
  },
  plugins: [],
}
