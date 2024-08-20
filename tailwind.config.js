const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        orchid: {
          50: 'var(--orchid-50)',
          100: 'var(--orchid-100)',
          200: 'var(--orchid-200)',
          300: 'var(--orchid-300)',
          400: 'var(--orchid-400)',
          500: 'var(--orchid-500)',
          600: 'var(--orchid-600)',
          700: 'var(--orchid-700)',
          800: 'var(--orchid-800)',
          900: 'var(--orchid-900)',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
