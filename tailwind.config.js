/** @type {import('tailwindcss').Config} */
export default {
  // Added comment to force Vite HMR / Tailwind JIT to re-evaluate the config and scan for newly created files like LandingPage.jsx.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

