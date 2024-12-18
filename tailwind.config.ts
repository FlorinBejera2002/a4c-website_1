import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme: {
    extend: {
      
      boxShadow: {
        'outline-red': '0 0 10px 5px rgba(255, 0, 0, 0.5)'
      },
      colors: {
        accent: '#e3ae00'
      }
    }
  }
}

export default config