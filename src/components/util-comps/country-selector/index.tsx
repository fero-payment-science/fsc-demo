import { countries } from "@/lib/data";
import { useState } from "react";

export default function CountrySelector({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      data-testid="country-selector"
      className={
        "w-full h-[60px] border rounded-sm cursor-pointer px-3 bg-white relative select-container"
      }
    >
      <p
        className={
          "absolute left-[10px] transition-all duration-300 m-0 text-[#a0a0a0] z-50 top-[8px] text-xs"
        }
      >
        Country
      </p>
      {isFocused && (
        <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_0_2px_black] rounded-sm" />
      )}
      <select
        onChange={onChange}
        defaultValue={"select"}
        className="w-full h-[30px] cursor-pointer top-[20px] relative"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <option disabled value="select">
          Select Country
        </option>
        {countries.map((country) => (
          <option key={country.alpha2} value={country.alpha2}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
