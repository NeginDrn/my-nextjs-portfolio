/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1280px"
      }
    },
    extend: {
      fontFamily: {
        primary: "var(--font-jetbrainsMono)"
      },
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187"
        }
      },
      borderRadius: {
        sm: "4px", // Tailwind default for rounded-sm
        md: "6px", // Tailwind default for rounded-md
        lg: "8px", // Tailwind default for rounded-lg
        xl: "12px", // Tailwind default for rounded-xl
        "2xl": "16px", // Tailwind default for rounded-2xl
        "3xl": "24px", // Tailwind default for rounded-3xl
        full: "9999px" // Tailwind default for fully rounded elements
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
