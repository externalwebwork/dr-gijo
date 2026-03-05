"use client";

import { useState } from "react";

export default function DateInput({ 
  id, 
  className, 
  value, 
  onChange 
}: { 
  id: string; 
  className?: string; 
  value?: string;
  onChange?: (date: string) => void;
}) {
  const [internalValue, setInternalValue] = useState(value || "");
  const [hasFocus, setHasFocus] = useState(false);
  const currentValue = value !== undefined ? value : internalValue;
  const showPlaceholder = !currentValue && !hasFocus;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (value !== undefined && onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleBlur = () => {
    setHasFocus(false);
  };

  return (
    <div className="relative">
      <input
        id={id}
        type="date"
        value={currentValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${className} text-gray-900 bg-white cursor-pointer`}
        min={new Date().toISOString().split('T')[0]}
      />
    </div>
  );
}
