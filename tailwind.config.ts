import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/renderer/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#090b0e',
          secondary: '#12141c',
          tertiary: '#1e2230',
        },
        brand: {
          pink: '#e84590',
          magenta: '#d6246e',
          orange: '#f58634',
          purple: '#3b1578',
          gold: '#f9a825',
        },
      },
      fontFamily: {
        headline: ['Bebas Neue', 'sans-serif'],
        ui: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
    },
  },
  plugins: [],
};

export default config;
