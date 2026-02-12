/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'widget-bg': '#1a1a1a',
        'widget-fg': '#e5e5e5',
        'nist-green': '#00ff00',
        'nist-off': '#1f2f1f',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
