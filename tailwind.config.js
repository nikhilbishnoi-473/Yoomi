/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        plus_jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "button-color": "#076787",
        "header-bg": "#F8FDFF",
      },
      fontSize: {
        "11xl": "32px",
        "12xl": "40px",
        "13xl": "57px",
        "14xl": "60px",
      },
      lineHeight: {
        "12xl": "44px",
        "13xl": "57px",
      },
      boxShadow: {
        input_shadow: " 0px 4px 15px 0px #07678726",
        card_shadow: " 0px 26px 27px 0px #0000000A",
        six_card: "0px 13px 18px 0px #0000000F",
      },
      backgroundImage: {
        "header-bg": `url("./assets/images/webp/header-bg.webp")`,
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
    },
  },
  plugins: [],
};
