

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#17171F",
      },

      fontFamily: {
        "poppins": ["Poppins"],
      },
      fontWeight: {
        "900": "900",
      }
    },
  },
  plugins: [],
};
