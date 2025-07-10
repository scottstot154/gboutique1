const config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7A614C",      // Primary earthy tone
          dark: "#5e4a3b",         // Hover state
          light: "#f6f0eb",        // Light background or secondary
          accent: "#EAC89F",       // Optional — add richness
        },
        text: {
          base: "#1F1F1F",         // Headings
          muted: "#666666",        // Subtext
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"], // Elegant title font
        sans: ["Inter", "sans-serif"],        // For body, buttons
      },
    },
  },
  plugins: [],
};

export default config;
