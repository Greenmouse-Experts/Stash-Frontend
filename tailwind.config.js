/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vsans: ['var(--general)']
      },
      backgroundImage: {
        faq: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1686757225/Stash/IMG_20210322_131554_1_dnzata.png')",
        contact: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1686757225/Stash/IMG_20210322_132040_1_gylzk7.png')",
      },
    },
  },
  plugins: [],
})

