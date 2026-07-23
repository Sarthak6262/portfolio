/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070A12",
          900: "#0B0F1A",
          800: "#111827",
          700: "#1A2233",
        },
        mist: {
          200: "#E6E9F2",
          400: "#94A3B8",
          500: "#6B7A94",
        },
        azure: {
          400: "#4E9BFF",
          500: "#3B82F6",
        },
        violet: {
          400: "#9F7AEA",
          500: "#8B5CF6",
        },
        cyan: {
          300: "#67E8F9",
          400: "#22D3EE",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "aurora":
          "radial-gradient(60% 50% at 20% 10%, rgba(79,155,255,0.18) 0%, transparent 60%), radial-gradient(50% 40% at 85% 20%, rgba(139,92,246,0.16) 0%, transparent 60%), radial-gradient(40% 40% at 50% 100%, rgba(34,211,238,0.12) 0%, transparent 60%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
