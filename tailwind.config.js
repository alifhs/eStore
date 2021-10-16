module.exports = {

  purge: [],

  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
     minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '280' : '380px'
     },
     flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',

     initial: '0 1 auto',

     inherit: 'inherit',
      none: 'none',

     '2': '2 2 0%',
     '3' : '3 3 0%',
     '4' : '4 4 0%',
     '5' : '5 5 0%',
     '6' : '6 6 0%',
     '7' : '7 7 0%',
     '8' : '8 8 0%'
    }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }