/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        theme01: "#760229",
        theme02: "#1F2D6A",
        theme03: "#044E4F",
      },
      fontFamily: {
        poppins: ["Poppins"],
        greatVibes: ["Great Vibes"],
      },
      textColor: {
        red01: "#EF4E5C",
        blue01: "#718BFE",
        green01: "#70CC9B",
        pink01: "#FF6E9F",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        wiggle_left: "wiggle_left 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wiggle_left: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};
