/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors:{
        "aa-marron":"#B38B59",
        "aa-vert":"#113E21",
        "aa-gris":"#F0F0F0",
        "aa-white":"#FEFEFE"
      }
    }
  },
  plugins: [],
}
