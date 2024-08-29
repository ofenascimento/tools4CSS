/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      lineHeight: {
        85: "85%",
        "08": "0.8",
      },
      fontFamily: {
        manrope: "Manrope",
        prompt: "Prompt",
        raleway: "Raleway",
        GilroyMedium: "GilroyMedium",
        GilroyBold: "GilroyBold",
        GilroyExtraBold: "GilroyExtraBold",
        lexend: ['Lexend', 'sans-serif'],
      },
      width: {
        22: "74px",
      },
      colors: {
        main: "#1a4fd8",
        mainDark: "#1C2939",
        dark: {
          100: "#1F2937",
        },
      },
      whiteSpace: {
        nowrap: "nowrap",
      },
      backgroundPosition: {
        center: "center",
        unset: "unset",
      },
      backgroundColor: {
        "white-glass": "rgba(255, 255, 255, 0.15);",
        "black-glass": "rgba(2, 2, 2, 0.15);",
        "white-glass-mobile": "rgba(255, 255, 255, 0.85);",
        "black-glass-mobile": "rgba(2, 2, 2, 0.65);",
      },
    },
  },
  plugins: [],
};
