/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#D673A0',
          soft: '#D99FB2',
          deep: '#995565',
          tint: '#F8E9EF',
          action: '#B0456F',
          accent: '#C4588A',
        },
        sage: {
          DEFAULT: '#AAB7A1',
          light: '#ADBEA3',
          tint: '#E8EDE3',
          deep: '#7F8F74',
          ink: '#5F6B57',
          darkest: '#4D5845',
        },
        peach: {
          DEFAULT: '#EFB8AA',
          tint: '#FBE8E2',
        },
        cream: {
          DEFAULT: '#F3F1E3',
          light: '#FAF8EF',
          dark: '#E7E3D1',
        },
        terracotta: '#DAA68F',
        graphite: '#171016',
        ink: {
          DEFAULT: '#2E252B',
          soft: '#6E6168',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'Nunito Sans', 'system-ui', 'sans-serif'],
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -32px rgba(153, 85, 101, 0.35)',
        card: '0 18px 40px -28px rgba(46, 37, 43, 0.35)',
        lift: '0 30px 70px -35px rgba(153, 85, 101, 0.45)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.45)', opacity: '0' },
          '100%': { transform: 'scale(1.45)', opacity: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'scale(0.96) translateY(12px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-soft': 'float-soft 5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.3s ease-out both',
        'modal-in': 'modal-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
