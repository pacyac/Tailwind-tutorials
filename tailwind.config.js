module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brighteRed: 'hsl(12,88%, 59%)',  
        brightRedLight: 'hsl(12,88%, 69%)',  
        brighteRedSupLight: 'hsl(12,88%, 95%)',  
        DarkBlue: 'hsl(228,39%, 23%)',  
        darkGrayishBlue: 'hsl(227,12%, 61%)',  
        veryDarkBlue: 'hsl(233,12%, 13%)',  
        veryPaleRed: 'hsl(13,100%, 96%)',  
        veryLightGray: 'hsl(0,0%, 98%)',  
      }
    },
  },
  plugins: [],
}
