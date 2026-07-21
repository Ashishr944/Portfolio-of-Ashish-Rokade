"use client";

import { useState } from "react";
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(!dark);
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
      }}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}