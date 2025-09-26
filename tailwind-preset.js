// tailwind-preset.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Core colors from your design system
        primary: "#F46036",
        "primary-hover": "#d54829",
        "primary-light": "#f7845c",
        "primary-dark": "#c53a2a",

        background: "#ffffff",
        foreground: "#171717",
        surface: "#f8f9fa",
        border: "#e5e7eb",
        muted: "#6b7280",

        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
    },
  },
  plugins: [
    require("./tailwind-plugin"), 
  ],
};
