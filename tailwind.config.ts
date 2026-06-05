import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'helionyx-black': '#050505',
        'helionyx-gunmetal': '#2a2e31',
        'helionyx-platinum': '#e8e8e8',
        'helionyx-silver': '#c0c0c0',
      },
      fontFamily: {
        'serif': ['Cinzel', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200, 200, 200, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(200, 200, 200, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
