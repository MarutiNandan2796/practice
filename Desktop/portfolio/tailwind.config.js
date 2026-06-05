export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00D9FF',
        secondary: '#0099CC',
        dark: '#0f172a',
        darkCard: '#1e293b',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideUp: 'slideUp 0.6s ease-out',
        neonPulse: 'neonPulse 2.5s ease-in-out infinite',
        glowRing: 'glowRing 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 1)' },
        },
        neonPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 1), 0 0 60px rgba(0, 217, 255, 0.5)' },
        },
        glowRing: {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8), inset 0 0 30px rgba(0, 217, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.1)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
