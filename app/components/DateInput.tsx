"use client";

import { useState } from "react";

export default function DateInput({ id, className }: { id: string; className?: string }) {
  const [value, setValue] = useState("");
  const [hasFocus, setHasFocus] = useState(false);
  const showPlaceholder = !value && !hasFocus;

  return (
    <div className="relative">
      <input
        id={id}
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        className={className}
      />
      {showPlaceholder && (
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-sm font-medium"
          aria-hidden
        >
          Select date
        </span>
      )}
    </div>
  );
}
