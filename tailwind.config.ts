import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundImages: {
          "custom-bg": "url('/bg.webp')",
          notif: "url('/features/alerts.jpg')",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#1a1a1a",
          focus: "#402e36",
        },
        pink: {
          accent: "#ff2e82",
        },
        backgroundShades: {
          light: "#f0f4f8",
          DEFAULT: "#d9e2ec",
          dark: "#bcccdc",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontSize: {
        "responsive-xs": ["clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)", "1.4"],
        "responsive-sm": ["clamp(0.875rem, 0.8rem + 0.375vw, 1rem)", "1.5"],
        "responsive-base": ["clamp(1rem, 0.95rem + 0.25vw, 1.125rem)", "1.6"],
        "responsive-lg": ["clamp(1.125rem, 1rem + 0.625vw, 1.5rem)", "1.7"],
        "responsive-xl": ["clamp(1.25rem, 1.1rem + 0.75vw, 2rem)", "1.8"],
        "title-2xl": ["clamp(2.5rem, 2rem + 2.5vw, 4rem)", "1.2"],
        "title-xl": ["clamp(2rem, 1.75rem + 1.5vw, 3rem)", "1.2"],
        "subtitle-lg": ["clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)", "1.3"],
        "subtitle-base": ["clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)", "1.4"],
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "908px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
