import { cn } from "@/lib/utils";
import { InputFieldProps } from "./types";
import { useRef, useState } from "react";
import TickIcon from "../tick-icon";

export default function InputField({
  value,
  placeholder,
  onChange,
  validityCheck,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const completed = validityCheck ? validityCheck(value) : value !== "";

  const inputRef = useRef<HTMLInputElement>(null);

  const hanldleContainerClick = () => inputRef.current?.focus();

  return (
    <div
      onClick={hanldleContainerClick}
      className={cn(
        "cursor-text h-[55px] w-full flex items-center justify-center bg-white border rounded-sm relative"
      )}
    >
      <p
        className={cn(
          "absolute left-[10px] transition-all duration-300 m-0 text-[#a0a0a0] z-50",
          value !== "" || isFocused ? "top-[5px] text-xs" : "top-[16px] text-base"
        )}
      >
        {placeholder}
      </p>
      {isFocused && (
        <div className="absolute rounded-sm inset-0 z-10 shadow-[inset_0_0_0_2px_black]" />
      )}
      <input
        className="w-full h-[30px] bg-transparent px-[10px] relative z-0 top-[4px]"
        type="text"
        ref={inputRef}
        value={value}
        onChange={onChange}
        data-testid="input-field"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TickIcon display={completed} />
    </div>
  );
}
