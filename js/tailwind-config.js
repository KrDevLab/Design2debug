tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        rule: "var(--rule)",
        brand: "var(--brand)",
        "brand-hover": "var(--brand-hover)",
        "brand-soft": "var(--brand-soft)",
        "accent-2": "var(--accent-2)",
        "tone-teal": "var(--tone-teal)",
        "tone-amber": "var(--tone-amber)",
        "tone-pink": "var(--tone-pink)",
        "tone-violet": "var(--tone-violet)",
        destructive: "var(--destructive)",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
};
