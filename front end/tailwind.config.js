module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#76FF61',
      'secondary': '#29ABE2',
     }),
    extend: {
      fontFamily:{
        body: ['Open Sans']
      },
      colors: {
        blue:' #29ABE2',
        graybg: '#F3F3F3',
      },
      spacing: {
        '100': '30rem',
        '18': '4.3rem',
        '13': '3.2rem',
        '15': '3.7rem',
        '101': '35rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
