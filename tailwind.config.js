/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",     // Blue
        secondary: "#FF6C00",   // Orange
        accent: "#34C759",     // Green
        background: "#F8F8F8",  // Light Gray
        textLight: "#333333",   // Dark Gray (Text on Light Background)
        textDark: "#FFFFFF",    // White (Text on Dark Background)
      },
    },
  },
  plugins: [],
};
