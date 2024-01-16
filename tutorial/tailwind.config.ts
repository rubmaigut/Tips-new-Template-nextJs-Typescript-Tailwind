import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }, 
      screens: {
        '3xl': '1920px'
      },
      color: {
        'primary': '#fff',
        'secondary': {
          100: "#f7fafc",
          900: "#1a202c"
        }
      },
    },
  },
  plugins: [],
}
export default config
