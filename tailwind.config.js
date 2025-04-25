module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'custom': '936px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
