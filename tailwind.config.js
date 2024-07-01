module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: 'rgba(236, 241, 245, 1)',
        footerbg: "rgba(7, 73, 113, 1)",
      },
      height:{
        customheight:"80vh"
      }
    },
    
    backgroundImage: {
      'custom-gradient': 'linear-gradient(269.51deg, rgba(217, 217, 217, 0.18) 14.77%, rgba(188, 225, 247, 0.78) 44.47%);', // Missing closing quote added here
    },
    // background: linear-gradient(269.51deg, rgba(217, 217, 217, 0.18) 14.77%, rgba(188, 225, 247, 0.78) 44.47%);

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
