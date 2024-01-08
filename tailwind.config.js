/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FCB72B",
        "dark-navy": "#495567",
        "dim-grey": "#939CAA",
        "light-grey": "#e5ecf4",
        snow: "#f2f5f9",
        "light-yellow": "#fff4df",
      },
    },
  },
  plugins: [],
};
