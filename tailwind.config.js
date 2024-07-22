/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'custome-dark-blue':'#201E43',
      'custome-light-blue':'#134B70',
      'custome-dlight-blue':'#508C9B',
      'custom-white':'#EEEEEE'
      },
    },
  },
  plugins: [],
}