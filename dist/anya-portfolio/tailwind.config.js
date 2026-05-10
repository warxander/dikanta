/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        cream: "#F0EFEC",
        linen: "#E3E1DD",
        sand: "#BFBDBA",
        ember: "#D01800",
        bark: "#0D0D14",
        charcoal: "#1A1A22",
        "warm-gray": "#888892",
        moss: "#3C5E40",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
