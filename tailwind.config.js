/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowBounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
