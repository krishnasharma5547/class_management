module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navColor: "#0E1726",
        search: "#212837",
        profileBottomBar: "#191E3A",
      },
      borderRadius: {
        cir: "50%",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      backgroundColor: ["active"],
      borderWidth: ['hover', 'focus','active'],
      borderRadius : ['hover', 'focus','active'],
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [],
};
