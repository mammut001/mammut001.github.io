import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#D9764A",
          hover: "#C46538",
          deep: "#7A3A24",
          soft: "#FFF0E6",
        },
        ink: "#1E1B18",
        muted: "#6B6560",
        line: "#E8E0D8",
        paper: "#FDFBF8",
      },
      maxWidth: { content: "1120px" },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
