module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swipe: {
          '0%': {transform: 'translate(0px, 0px)'},
          '100%': {transform: 'translate(-1000%, 0px)'}
        },
      },
      animation: {
        'swiper': 'swipe 5s linear infinite'
      }
    },
  },
  plugins: [],
};
