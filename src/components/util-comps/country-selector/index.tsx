import { countries } from "@/lib/data";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function CountrySelector({
  onChange,
  minimalVersion,
}: {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  minimalVersion?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      data-testid="country-selector"
      className={`w-full h-[${
        minimalVersion ? "45px" : "60px"
      }] border rounded-md cursor-pointer px-3 bg-white relative select-container`}
    >
      {!minimalVersion && (
        <p
          className={
            "absolute left-[10px] transition-all duration-300 m-0 text-[#a0a0a0] z-50 top-[8px] text-xs"
          }
        >
          Country
        </p>
      )}
      {isFocused && !minimalVersion && (
        <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_0_2px_black] rounded-sm" />
      )}
      <select
        onChange={onChange}
        defaultValue={"select"}
        className={`w-full h-[30px] cursor-pointer relative`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          top: minimalVersion ? "8px" : "20px",
        }}
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
      <FiChevronDown size={25} className="text-gray-400 absolute right-[10px] top-[calc(50%-12px)]" />
    </div>
  );
}
