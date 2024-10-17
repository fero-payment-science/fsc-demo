import { useCheckout } from "../../contexts/checkout-context";
import { cn } from "../../lib/utils";
import AddressForm from "../util-comps/address-form";
import ModuleTitle from "../util-comps/module-title";

type OptionValue = "shipping" | "other";
const SelectBar = ({
  optionText,
  selected,
  handleSelect,
  value,
  noBorder,
  testId,
}: {
  optionText: string;
  selected: boolean;
  value: OptionValue;
  handleSelect: () => void;
  noBorder?: boolean;
  testId?: string;
}) => {
  return (
    <div
      data-testid={testId ?? "select-bar"}
      onClick={handleSelect}
      className={cn(
        "h-[60px] w-full flex items-center px-4 gap-4 rounded-sm cursor-pointer m-0",
        selected ? "bg-[#efefef]" : "",
        !noBorder ? "border-2 border-[#cacaca]" : ""
      )}
    >
      <div className="min-h-[20px] min-w-[20px] rounded-full border border-[#979797] flex items-center justify-center">
        {selected && (
          <div
            className={cn(
              "min-h-[14px] min-w-[14px] rounded-full border-[5px] border-[#242424] relative",
              value === "other" ? "" : "bottom-[0.5px]"
            )}
          />
        )}
      </div>
      <p className="text-sm">{optionText}</p>
    </div>
  );
};

export default function BillingAddress({
  dependantStep,
}: {
  dependantStep: keyof typeof stepCompleted;
}) {
  const {
    billingAddress: address,
    setBillingAddress,
    useShippingAddress,
    setUseShippingAddress,
    stepCompleted,
  } = useCheckout();
  // const stepCompleted = { shipping: true };

  return (
    <div
      className={cn(
        "ease-in-out duration-300 transition-opacity",
        stepCompleted[dependantStep]
          ? "opacity-100"
          : "opacity-20 pointer-events-none"
      )}
    >
      <ModuleTitle title="Billing Address" />
      <div>
        <SelectBar
          optionText="Same as delivery address"
          selected={useShippingAddress}
          handleSelect={() => setUseShippingAddress(true)}
          value="shipping"
        />
        <div
          data-testid={"different-address-container"}
          className={cn(
            "border-2 border-[#cacaca] border-t-0 transition-all linear duration-500 overflow-hidden",
            !useShippingAddress
              ? "auto-height-open"
              : "auto-height-closed max-h-[60px]"
          )}
        >
          <SelectBar
            optionText="Use a different address"
            selected={!useShippingAddress}
            handleSelect={() => setUseShippingAddress(false)}
            value="other"
            noBorder
            testId="use-different-address"
          />
          <div className="p-4 bg-[#efefef]">
            <AddressForm
              changeCallback={setBillingAddress}
              controlAddress={address}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
