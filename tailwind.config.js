/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: { 'custom-clip': 'polygon(0 0, 100% 0%, 100% 100%, 30% 100%)', },
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
        const newUtilities = {
            '.clip-custom-clip': {
                clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 30% 100%)',
            },
        };
        addUtilities(newUtilities, ['responsive', 'hover']);
    },
],

  daisyui: {
    themes: ["light", "dark", "cupcake","luxury"],
  },
}

