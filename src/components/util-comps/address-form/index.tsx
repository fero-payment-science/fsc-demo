import { Dispatch, SetStateAction } from "react";
// import CountrySelector from "../util-comps/country-selector";
import InputField from "../input-field";
import CountrySelector from "../country-selector";
export const placeholderValues: Record<string, string> = {
  first_name: "First name",
  last_name: "Last name",
  company: "Company (optional)",
  address_1: "Address line 1",
  address_2: "Address line 2 (optional)",
  postcode: "Postcode",
  city: "City",
  state: "State/County",
  phone: "Phone",
};

export default function AddressForm({
  changeCallback,
  testId,
  controlAddress,
}: {
  changeCallback: Dispatch<SetStateAction<Address>>;
  testId?: string;
  controlAddress: Address;
}) {
  const handleInput = (key: string, value: string) => {
    changeCallback((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div data-testid={testId ?? "address-form"} className="flex flex-col gap-2">
      <CountrySelector
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleInput("country", e.target.value)
        }
      />
      <div className="grid grid-cols-2 gap-2">
        <InputField
          placeholder={placeholderValues.first_name}
          value={controlAddress.first_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput("first_name", e.target.value)
          }
        />
        <InputField
          placeholder={placeholderValues.last_name}
          value={controlAddress.last_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput("last_name", e.target.value)
          }
        />
      </div>
      <InputField
        placeholder={placeholderValues.company}
        value={controlAddress.company}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInput("company", e.target.value)
        }
      />
      <InputField
        placeholder={placeholderValues.address_1}
        value={controlAddress.address_1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInput("address_1", e.target.value)
        }
      />
      <InputField
        placeholder={placeholderValues.address_2}
        value={controlAddress.address_2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInput("address_2", e.target.value)
        }
      />
      <div className="grid grid-cols-2 gap-2">
        <InputField
          placeholder={placeholderValues.city}
          value={controlAddress.city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput("city", e.target.value)
          }
        />
        <InputField
          placeholder={placeholderValues.state}
          value={controlAddress.state}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput("state", e.target.value)
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <InputField
          placeholder={placeholderValues.postcode}
          value={controlAddress.postcode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput("postcode", e.target.value)
          }
        />
        <InputField
          placeholder={placeholderValues.phone}
          value={controlAddress.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput("phone", e.target.value)
          }
        />
      </div>
    </div>
  );
}
