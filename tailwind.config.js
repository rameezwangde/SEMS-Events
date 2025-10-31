/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'display': ['Orbitron', 'Outfit', 'sans-serif'],
        'heading': ['Outfit', 'Space Grotesk', 'sans-serif'],
        'body': ['DM Sans', 'Sora', 'sans-serif'],
        'elegant': ['Playfair Display', 'serif'],
        'modern': ['Sora', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitchText 0.3s ease-in-out',
        'slide-diagonal': 'slideInDiagonal 1s ease-out forwards',
        'morph-shape': 'morphShape 8s ease-in-out infinite',
        'text-reveal': 'textReveal 2s ease-out forwards',
        'border-slide': 'borderSlide 2s linear infinite',
      },
      keyframes: {
        glitchText: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        slideInDiagonal: {
          'from': {
            opacity: '0',
            transform: 'translate(-100px, -100px) rotate(-10deg)',
          },
          'to': {
            opacity: '1',
            transform: 'translate(0, 0) rotate(0deg)',
          },
        },
        morphShape: {
          '0%': { borderRadius: '0% 100% 0% 100%' },
          '25%': { borderRadius: '100% 0% 100% 0%' },
          '50%': { borderRadius: '50% 50% 50% 50%' },
          '75%': { borderRadius: '0% 100% 50% 50%' },
          '100%': { borderRadius: '0% 100% 0% 100%' },
        },
        textReveal: {
          'from': {
            width: '0',
            opacity: '0',
          },
          'to': {
            width: '100%',
            opacity: '1',
          },
        },
        borderSlide: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}
