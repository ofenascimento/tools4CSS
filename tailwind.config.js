/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      lineHeight: {
        '85': '85%'
      },
      fontFamily: {
        'manrope': 'Manrope',
        'prompt': 'Prompt',
        'GilroyMedium': 'GilroyMedium',
        'GilroyBold': 'GilroyBold',
        'GilroyExtraBold': 'GilroyExtraBold',
        'EuclidRegular': 'EuclidRegular',
        'EuclidMedium': 'EuclidMedium',
        'EuclidBold': 'EuclidBold'

      },
      width: {
        '22': '74px'
      }
    },
  },
  plugins: [],
}