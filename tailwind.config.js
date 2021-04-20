module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sweet-potato': '#7B765E',
        'cuny-red': '#902E44'
      }
    },
    fontFamily: {
      'sans': ['Poppins']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
