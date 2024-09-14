module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "var(--black_900)" },
        gray: { 200: "var(--gray_200)" },
        green: { 600: "var(--green_600)", "600_8c": "var(--green_600_8c)" },
        white: { a700: "var(--white_a700)", a700_66: "var(--white_a700_66)" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", poppins: "Poppins", antonio: "Antonio", timesnewroman: "Times New Roman" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

