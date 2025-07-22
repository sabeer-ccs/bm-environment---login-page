module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "1-primitives-colors-base-white":
          "var(--1-primitives-colors-base-white)",
        "1-primitives-colors-slate-500": "var(--1-primitives-colors-slate-500)",
        "1-primitives-colors-zinc-400": "var(--1-primitives-colors-zinc-400)",
        "1-primitives-colors-zinc-50": "var(--1-primitives-colors-zinc-50)",
        "1-primitives-colors-zinc-500": "var(--1-primitives-colors-zinc-500)",
        "1-primitives-colors-zinc-950": "var(--1-primitives-colors-zinc-950)",
        "3-shadcn-ui-colors-UI-background":
          "var(--3-shadcn-ui-colors-UI-background)",
        "3-shadcn-ui-colors-UI-foreground":
          "var(--3-shadcn-ui-colors-UI-foreground)",
        "3-shadcn-ui-colors-UI-muted-muted-foreground":
          "var(--3-shadcn-ui-colors-UI-muted-muted-foreground)",
        "BM-learning-colors-background-bgnd-2":
          "var(--BM-learning-colors-background-bgnd-2)",
        "primitives-colors-red-600": "var(--primitives-colors-red-600)",
        "semantic-colors-color-text-error":
          "var(--semantic-colors-color-text-error)",
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
      },
      fontFamily: {
        "text-sm-font-medium": "var(--text-sm-font-medium-font-family)",
        "text-sm-font-semibold": "var(--text-sm-font-semibold-font-family)",
        "text-sm-regular": "var(--text-sm-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "box-shadow-shadow-sm": "var(--box-shadow-shadow-sm)" },
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
