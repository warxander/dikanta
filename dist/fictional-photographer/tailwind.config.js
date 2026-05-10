/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                black: "#0a0a0a",
                "off-black": "#141414",
                white: "#ffffff",
                "off-white": "#f5f5f5",
                gray: {
                    100: "#e5e5e5",
                    200: "#d4d4d4",
                    300: "#a3a3a3",
                    400: "#737373",
                    500: "#525252",
                    600: "#404040",
                    700: "#262626",
                },
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                body: ["Inter", "sans-serif"],
                accent: ["Cormorant Garamond", "serif"],
            },
            letterSpacing: {
                widest: "0.25em",
            },
            spacing: {
                18: "4.5rem",
                88: "22rem",
                128: "32rem",
            },
            maxWidth: {
                "8xl": "88rem",
            },
            transitionTimingFunction: {
                luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
        },
    },
    plugins: [],
};
