/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "color1": "#32502e",
        "color2": "#406343",
        "color3": "#ECE7B4",
        "color4": "#F3EFCC",
        "color5": "#FBFCF8"
      },
    },
  },
  plugins: [],
};
