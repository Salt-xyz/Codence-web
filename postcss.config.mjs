/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // Includes .mdx if you're using MDX pages
    "./public/index.html",           // Optional: for index.html in CRA or Vite
  ],
  theme: {
    extend: {
      // Customize your theme here
      colors: {
        primary: "#1E40AF", // Example
        dark: "#111827",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Add official plugins here if needed:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
