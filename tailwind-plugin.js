const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    ".button-primary": {
      "@apply": "bg-primary text-foreground font-semibold rounded-md px-4 py-2 transition-colors duration-200 cursor-pointer",
    },
    ".button-primary:hover": {
      "@apply": "bg-primary-hover",
    },
    ".button-primary:disabled": {
      "@apply": "opacity-70 cursor-not-allowed",
    },
  });
});
