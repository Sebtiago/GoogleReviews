/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'candy-red': '#EC2427',
        'candy-lightred': '#E56263',
        'candy-beige': '#F4E9E5',
        'candy-gray':'#909090',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
    }
  }
}