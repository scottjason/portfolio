import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minWidth: {
        '2/3': '70%',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #0a0a0a, #1e1e1e)',
      },
      animation: {
        'slide-in': 'slide-in 1s ease-in-out forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { width: '0' },
          '100%': { width: '85%' },
        },
      },
    },
    screens: {
      xs: '410px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};

export default config;
