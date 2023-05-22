/** @type {import('https://esm.sh/tailwindcss@3.1.8').Config} */
module.exports = {
  content: [
    "./routes/**/*.{tsx,ts}",
    "./islands/**/*.{tsx,ts}",
    "./components/**/*.{tsx,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          from: {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },

          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "appear": "appear 1s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
