module.exports = {
  mode: 'jit',
  purge: [ './src/**/*.svelte' ],

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  
  theme: {
    extend: {

      colors: {
        'bubblegum': '#ff77e9'
      },

      width: {
        'pptx-image': '11vw'
      },

      padding: {
        'square': '100%'
      },

      height: {
        'pptx-image': '11vw'
      }
      }
  }
  

}


