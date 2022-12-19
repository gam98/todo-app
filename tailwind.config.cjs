/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'check-background':
          'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
      }
    },
    fontFamily: {
      'josefin-sans': ['Josefin Sans']
    },
    colors: {
      // Primary
      'bright-blue': 'hsl(220, 98%, 61%)',
      // Light Theme
      'very-light-gray-lt': 'hsl(0, 0%, 98%)',
      'very-light-grayish-blue-lt': 'hsl(236, 33%, 92%)',
      'light-grayish-blue-lt': 'hsl(233, 11%, 84%)',
      'dark-grayish-blue-lt': 'hsl(236, 9%, 61%)',
      'very-dark-grayish-blue-lt': 'hsl(235, 19%, 35%)',
      //  Dark Theme
      'very-dark-blue-dt': 'hsl(235, 21%, 11%)',
      'very-dark-desaturated-blue-dt': 'hsl(235, 24%, 19%)',
      'light-grayish-blue-dt': 'hsl(234, 39%, 85%)',
      'light-grayish-blue-hover-dt': 'hsl(236, 33%, 92%)',
      'dark-grayish-blue-dt': 'hsl(234, 11%, 52%)',
      'very-dark-grayish-blue-dt': 'hsl(233, 14%, 35%)',
      'very-dark-grayish-blue': 'hsl(237, 14%, 26%)'
    }
  },
  plugins: []
}
