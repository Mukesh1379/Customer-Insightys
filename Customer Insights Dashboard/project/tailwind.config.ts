import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.4) 2px, transparent 2px), linear-gradient(to right top, rgba(255, 255, 255, 0.4) 2px, transparent 2px)',
      },
      boxShadow: {
        'glass': '0 0 15px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.5)',
        'glass-hover': '0 0 20px rgba(0, 0, 0, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.6)',
        'neon': '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.500)',
      },
    },
  },
  plugins: [],
};
export default config;