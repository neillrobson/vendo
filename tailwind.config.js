module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
