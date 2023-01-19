/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        "dark-1": "var(--color-dark-1)",
        "dark-2": "var(--color-dark-2)",
        "dark-3": "var(--color-dark-3)",
        "dark-4": "var(--color-dark-4)",
        "dark-5": "var(--color-dark-5)",
        "dark-6": "var(--color-dark-6)",
        "light-1": "var(--color-light-1)",
        "light-2": "var(--color-light-2)",
        "light-3": "var(--color-light-3)",
        "light-4": "var(--color-light-4)",
        "light-5": "var(--color-light-5)",
        "light-6": "var(--color-light-6)"
      },
      dropShadow: {
        'txt1': '2px 2px 8px #000',
        'txt2': '1px 1px 4px #000',
        'txt3': '2px 2px 8px #FFF',
        'txt4': '1px 1px 4px #FFF'
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif", "system-ui"],
        default: ["var(--font-body)", "sans-serif", "system-ui"],
      },
      animation: {
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
