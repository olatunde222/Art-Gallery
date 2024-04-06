/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Animation for the hamburger
      animation: {
        hamburgerPuls: "hamburgerPuls 1s ease infinite",
        textReveal: "textReveal 0.5s ease fowards",
        textRevealName: "textRevealName 0.5s ease forwards",
        textRevealBox: "textRevealBox 0.1s ease"
      },
      // Hambuger keyframes
      keyframes: {
        hamburgerPuls: {
          "0%, 50%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(1)",
          },
        },
        textRevealBox: {
          "0, 50%": {
            width: "100%",
            left: "0",
          },
          "100%": {
            width: "0",
            left: "100%",
          },
        },
        textReveal: {
          "100%": {
            color: "white",
          },
        },
        textRevealName: {
          "100%": {
            color: "white",
            font: "bold",
          },
        },
      },
    },
  },
  plugins: [],
};
