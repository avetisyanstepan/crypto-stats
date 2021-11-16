module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      'white':"#FFFFFF",
      'black':'#000000',
      'blue': '#247ba0',
      'red':'#e42a1d',
      'green':"#047857",
      'yellow': '#FCD34D',
      'gray': '#D1D5DB'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
