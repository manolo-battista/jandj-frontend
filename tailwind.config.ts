import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      base: "1rem",
      xs: "1.25rem",
      sm: "1.5rem",
      md: "3rem",
      lg: "4rem",
      xl: "5rem",
    },
    fontFamily: {
      "johnson-display": ["Johnson Display", "sans-serif"],
      "johnson-text": ["Johnson Text", "sans-serif"],
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
          hover: "hsl(var(--border-hover))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--white))",
          active: "hsl(var(--gray-100))",
        },
        layer: {
          header: "hsl(var(--gray-900))",
          footer: "hsl(var(--gray-900))",
        },
        tag: {
          DEFAULT: "hsl(var(--gray-300))",
        },
        red: {
          foreground: "hsl(var(--red-100))",
          100: "hsl(var(--red-100))",
          200: "hsl(var(--red-200))",
          300: "hsl(var(--red-300))",
          400: "hsl(var(--red-400))",
          DEFAULT: "hsl(var(--red-500))",
          600: "hsl(var(--red-600))",
          700: "hsl(var(--red-700))",
          800: "hsl(var(--red-800))",
          900: "hsl(var(--red-900))",
        },
        gray: {
          100: "hsl(var(--gray-100))",
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          DEFAULT: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))",
          700: "hsl(var(--gray-700))",
          800: "hsl(var(--gray-800))",
          900: "hsl(var(--gray-900))",
        },
        blue: {
          100: "hsl(var(--blue-100))",
          200: "hsl(var(--blue-200))",
          300: "hsl(var(--blue-300))",
          400: "hsl(var(--blue-400))",
          DEFAULT: "hsl(var(--blue-500))",
          600: "hsl(var(--blue-600))",
          700: "hsl(var(--blue-700))",
          800: "hsl(var(--blue-800))",
          900: "hsl(var(--blue-900))",
        },
        success: {
          100: "hsl(var(--green-100))",
          200: "hsl(var(--green-200))",
          300: "hsl(var(--green-300))",
          400: "hsl(var(--green-400))",
          DEFAULT: "hsl(var(--green-500))",
          600: "hsl(var(--green-600))",
          700: "hsl(var(--green-700))",
          800: "hsl(var(--green-800))",
          900: "hsl(var(--green-900))",
        },
        warning: {
          100: "hsl(var(--yellow-100))",
          200: "hsl(var(--yellow-200))",
          300: "hsl(var(--yellow-300))",
          400: "hsl(var(--yellow-400))",
          DEFAULT: "hsl(var(--yellow-500))",
          600: "hsl(var(--yellow-600))",
          700: "hsl(var(--yellow-700))",
          800: "hsl(var(--yellow-800))",
          900: "hsl(var(--yellow-900))",
        },
        error: {
          100: "hsl(var(--error-100))",
          200: "hsl(var(--error-200))",
          300: "hsl(var(--error-300))",
          400: "hsl(var(--error-400))",
          DEFAULT: "hsl(var(--error-500))",
          600: "hsl(var(--error-600))",
          700: "hsl(var(--error-700))",
          800: "hsl(var(--error-800))",
          900: "hsl(var(--error-900))",
        },
        neutral: {
          DEFAULT: "hsl(var(--white))",
          black: "hsl(var(--black))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
