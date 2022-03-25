module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {

    extend: {
      colors:{
        'malachite': {  DEFAULT: '#12F452',  '50': '#C1FCD2',  '100': '#AEFBC4',  '200': '#87F9A7',  '300': '#60F88B',  '400': '#39F66E',  '500': '#12F452',  '600': '#09C53E',  '700': '#078F2D',  '800': '#045A1C',  '900': '#02240B'},
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
