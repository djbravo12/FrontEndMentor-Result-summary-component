/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "lightRed": "hsl(var(--LightRed))",
      "orangeYellow": "hsl(var(--OrangeyYellow))",
      "greenTeal": "hsl(var(--GreenTeal))",
      "cobaltBlue": "hsl(var(--CobaltBlue))",
      "lightSlateBlueBackground": "hsl(var(--LightSlateBlueBackground))",
      "lightRoyalBlueBackground": "hsl(var(--LightRoyalBlueBackground))",
      "violetBlueCircle": "hsl(var(--VioletBlueCircle)/1)",
      "persianBlueCircle": "hsl(var(--PersianBlueCircle)/0)",
      "white": "hsl(var(--White))",
      "paleBlue": "hsl(var(--PaleBlue))",
      "lightLavender": "hsl(var(--LightLavender))",
      "darkGrayBlue": "hsl(var(--DarkGrayBlue))",
      "lightRedBG": "hsl(var(--LightRed)/8%)",
      "orangeYellowBG": "hsl(var(--OrangeyYellow)/8%)",
      "greenTealBG": "hsl(var(--GreenTeal)/8%)",
      "cobaltBlueBG": "hsl(var(--CobaltBlue)/8%)",
    },
    extend: {
      fontFamily: {
        "Hanken": ['Hanken Grotesk', "sans-serif"]
      }
    },
  },
  plugins: [],
}

