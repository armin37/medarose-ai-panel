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
      'dark-1': 'var(--dark-1)',
      'dark-2': 'var(--dark-2)',
      'dark-3': 'var(--dark-3)',
      'light-1': 'var(--light-1)',
      'light-2': 'var(--light-2)',
      'light-3': 'var(--light-3)',
      neutral: 'var(--neutral)'
    },
  },
  plugins: [],
}

