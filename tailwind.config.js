/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Fira Sans"',
        "system-ui",
        "-apple-system",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "sans-serif",
      ],
      serif: [
        "Merriweather",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        '"Roboto Mono"',
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
      poppins: ['"Poppins"'],
      display: ['"Sansita Swashed"'],
      handwriting: ['"Dancing Script"'],
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
