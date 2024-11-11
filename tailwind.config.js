import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        surface: colors.gray[900],
        primary: colors.sky[500],
        secondary: colors.emerald[500],
        tertiary: colors.rose[500],
        ...colors
      }
    }
  },

  plugins: []
}
