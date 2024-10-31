/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      },
      background: {
        "custom-btn":
          "linear-gradient(180deg,  rgba(253,187,45,1) 100%, rgba(34,193,195,1) 0%)",
      },

      fontFamily: {
        allura: ["Allura", "cursive"],
        playfair: ["Playfair", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".25em",
      },
      backgroundColor: {
        'light-grey': '#d3d3d3', // Equivalente a 'lightgrey'
      },
      boxShadow: {
        'custom-inset': 'rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset',
      },
    },
  },
  plugins: [],
};
