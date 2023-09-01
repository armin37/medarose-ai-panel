const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#7951a1',
      primary_shade: '#0b2d4d',
      secondary: '#79a159',
      success: '#57bc57',
      info: '#35a4cc',
      warning: '#e89c54',
      help: '#9f9cb1',
      danger: '#d45472',
      black: colors.black,
      white: colors.white,
      neutral: colors.gray
    },
  },
  plugins: [],
}

