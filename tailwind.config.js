/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#fab031',
          500: '#f9a109',
          600: '#d48805',
        },
        purple: {
          700: '#5d1ca7',
          800: '#491684',
          900: '#361061',
          950: '#1a0638',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(28px, -18px) scale(1.07)' },
          '66%': { transform: 'translate(-18px, 14px) scale(0.96)' },
        },
        'orb-pulse': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(1.1)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'orb-drift': 'orb-drift 14s ease-in-out infinite',
        'orb-drift-r': 'orb-drift 18s ease-in-out infinite reverse',
        'orb-pulse': 'orb-pulse 10s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'slide-down': 'slide-down 0.25s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
