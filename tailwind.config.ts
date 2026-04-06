import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f5f8ff',
          100: '#e9f0ff',
          200: '#c7d7ff',
          300: '#9cb4ff',
          400: '#708cff',
          500: '#4968ff',
          600: '#2f43d4',
          700: '#2534a8',
          800: '#1e2885',
          900: '#1c236b',
          950: '#11153e',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        sm: ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0.0125em' }],
        base: ['1rem', { lineHeight: '1.75rem', letterSpacing: '0.005em' }],
        lg: ['1.125rem', { lineHeight: '1.875rem', letterSpacing: '0em' }],
        xl: ['1.25rem', { lineHeight: '2rem', letterSpacing: '-0.005em' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em' }],
        '3xl': ['2rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.5rem', { lineHeight: '3.25rem', letterSpacing: '-0.025em' }],
        '5xl': ['3.5rem', { lineHeight: '4.25rem', letterSpacing: '-0.03em' }],
        '6xl': ['4rem', { lineHeight: '4.75rem', letterSpacing: '-0.035em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        'b2b': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
