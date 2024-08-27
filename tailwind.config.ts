import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        "primary-alternate": "rgba(242, 245, 247, 1)",
        "primary-grey": "rgba(195, 207, 217, 1)",
        "primary-purple": "rgba(101, 88, 245, 1)",
        "primary-blue": "rgba(44, 136, 217, 1)",
        "secondary-blue": "rgba(152, 197, 236, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
