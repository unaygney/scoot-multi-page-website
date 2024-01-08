/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FCB72B",
        "dark-navy": "#495567",
        "dim-grey": "#FCB72B",
        "light-grey": "#FCB72B",
        snow: "#FCB72B",
        "light-yellow": "#FCB72B",
      },
    },
  },
  plugins: [],
};
