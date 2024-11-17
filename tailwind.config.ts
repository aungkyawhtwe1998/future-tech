import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_08:"#141414",
        dark_10:"#1A1A1A",
        dark_15:"#262626",
        dark_20: "#333333",
        dark_25:"#404040",
        dark_40: "#666666",
        grey_50:"#7E7E81",
        grey_60:"#98989A",
        yellow:"#FFD11A",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
