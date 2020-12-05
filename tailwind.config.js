const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      blue: colors.blue,
      cyan: colors.cyan
    }
  },
  purge: {
    enabled: true,
    mode: 'all',
    preserveHtmlElements: true,
    content: [
      './src/**/*.js'
    ]
  }
}
