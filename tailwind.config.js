/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        background: '#FFFDFA',
        'background-card': '#F3F1ED',
        primary: '#438EFF',
        'primary-light': '#A9CCFF',
        text: '#333333',
        subtext: '#595959',
        icon: '#333333',
        line: '#ADADAD',
      }
    },
  },
  plugins: [],
}
