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
      fontSize: {
        xs: "0.8rem",
        sm: "0.93rem",
        base: "1.06rem",
        md: "1.06rem",
        lg: "1.19rem",
        xl: "1.33rem",
        "2xl": "1.59rem",
        "3xl": "1.99rem",
        "4xl": "2.39rem",
        "5xl": "3.19rem",
        "6xl": "3.98rem",
        "7xl": "4.78rem",
      },
      fontFamily: {
        manrope: "Manrope",
        prompt: "Prompt",
        raleway: "Raleway",
        GilroyMedium: "GilroyMedium",
        GilroyBold: "GilroyBold",
        GilroyExtraBold: "GilroyExtraBold",
        DMSans: "DM Sans",
        lexend: ["Lexend", "sans-serif"],
        redHat: "Red Hat Display",
        nunito: "Nunito",
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
        "custom-gray": {
          main: "#F4F5F8",
          secondary: "#dce3ea",
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
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        13: "repeat(13, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
  purge: false,
};
