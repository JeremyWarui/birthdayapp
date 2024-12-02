/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-max": { max: "766px" }, // Add a custom breakpoint for small screens
      }, 
    },
  },
  plugins: [],
};
