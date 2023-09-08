const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--primary)',
      primary_shade: 'var(--primary_shade)',
      secondary: 'var(--secondary)',
      success: 'var(--success)',
      info: 'var(--info)',
      warning: 'var(--warning)',
      help: 'var(--help)',
      danger: 'var(--danger)',
      black: 'var(--black)',
      white: 'var(--white)',
      neutral: 'var(--neutral)'
    },
  },
  plugins: [],
}

