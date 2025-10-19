import type { Config } from "tailwindcss";

const config = {
  content: [
    // Path yang lebih spesifik dan akurat untuk struktur proyek Anda
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "cloud-white": "hsl(var(--background))",
        "dusty-blue": "hsl(var(--dusty-blue))",
        "slate-gray": "hsl(var(--slate-gray))",
        // Elegant Navy, Gold, and White color palette
        navy: {
          50: "oklch(0.95 0.01 240)",
          100: "oklch(0.85 0.01 240)",
          200: "oklch(0.75 0.02 240)",
          300: "oklch(0.65 0.02 240)",
          400: "oklch(0.5 0.02 240)",
          500: "oklch(0.4 0.03 240)", // Standard navy
          600: "oklch(0.3 0.03 240)",
          700: "oklch(0.2 0.03 240)", // Deep navy
          800: "oklch(0.15 0.02 240)",
          900: "oklch(0.1 0.02 240)",
        },
        gold: {
          50: "oklch(0.97 0.08 70)",
          100: "oklch(0.92 0.08 70)",
          200: "oklch(0.87 0.09 70)",
          300: "oklch(0.82 0.09 70)",
          400: "oklch(0.77 0.09 70)", // Standard gold
          500: "oklch(0.72 0.09 70)",
          600: "oklch(0.67 0.09 70)",
          700: "oklch(0.62 0.08 70)",
          800: "oklch(0.57 0.08 70)",
          900: "oklch(0.52 0.07 70)",
        },
        white: {
          DEFAULT: "oklch(1 0 0)",
          50: "oklch(0.98 0 0)",
          100: "oklch(0.95 0 0)",
          200: "oklch(0.92 0 0)",
          300: "oklch(0.88 0 0)",
          400: "oklch(0.85 0 0)",
          500: "oklch(0.8 0 0)",
          600: "oklch(0.7 0 0)",
          700: "oklch(0.6 0 0)",
          800: "oklch(0.4 0 0)",
          900: "oklch(0.2 0 0)",
        },
        "dusty-blue": {
          50: "oklch(0.96 0.01 250)",
          100: "oklch(0.92 0.02 250)",
          200: "oklch(0.87 0.04 250)",
          300: "oklch(0.82 0.05 250)",
          400: "oklch(0.78 0.05 250)", // Base
          500: "oklch(0.73 0.06 250)",
          600: "oklch(0.67 0.06 250)",
          700: "oklch(0.61 0.06 250)",
          800: "oklch(0.55 0.05 250)",
          900: "oklch(0.48 0.05 250)",
        },
        "sage-green": {
          50: "oklch(0.96 0.01 110)",
          100: "oklch(0.92 0.02 110)",
          200: "oklch(0.88 0.03 110)",
          300: "oklch(0.83 0.04 110)",
          400: "oklch(0.78 0.04 110)", // Base
          500: "oklch(0.73 0.04 110)",
          600: "oklch(0.67 0.04 110)",
          700: "oklch(0.61 0.04 110)",
          800: "oklch(0.55 0.03 110)",
          900: "oklch(0.49 0.03 110)",
        },
        "cream": {
          50: "oklch(0.99 0.005 90)",
          100: "oklch(0.97 0.01 90)", // Base
          200: "oklch(0.94 0.01 90)",
          300: "oklch(0.91 0.02 90)",
          400: "oklch(0.88 0.02 90)",
          500: "oklch(0.85 0.02 90)",
          600: "oklch(0.82 0.02 90)",
          700: "oklch(0.79 0.02 90)",
          800: "oklch(0.76 0.02 90)",
          900: "oklch(0.73 0.02 90)",
        },
        "stone": {
          50: "oklch(0.96 0.005 90)",
          100: "oklch(0.92 0.01 90)",
          200: "oklch(0.88 0.01 90)",
          300: "oklch(0.84 0.015 90)",
          400: "oklch(0.80 0.015 90)", // Base
          500: "oklch(0.76 0.02 90)",
          600: "oklch(0.72 0.02 90)",
          700: "oklch(0.68 0.02 90)",
          800: "oklch(0.64 0.02 90)",
          900: "oklch(0.60 0.02 90)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        heading: ["var(--font-playfair)", "serif"], // Additional alias for headings
      },
      extend: {
        fontFamily: {
          heading: ["var(--font-playfair)", "serif"], // Ensure this is in extend as well
        },
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-in-down": "fade-in-down 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
