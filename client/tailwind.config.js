module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    maxWidth: {
      "1/3vw": "33vw",
    },
    extend: {
      height: {
        navScreen: "calc(100vh - 3.5rem)",
      },
      colors: {
        modal: "rgba(0, 0, 0, 0.4)",
      },
      spacing: {
        "-5px": "- 5px",
      },
    },
  },
  plugins: [],
};
