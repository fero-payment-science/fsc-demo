import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import ModuleTitle from "../module-title";
// import AddressForm from "../address-form";
import { useCheckout } from "@/contexts/checkout-context";
import AddressForm from "../address-form";

export default function AddressModule({
  moduleTitle,
  changeCallback,
  dependantStep,
}: {
  moduleTitle: string;
  dependantStep?: keyof typeof stepCompleted;
  changeCallback: Dispatch<SetStateAction<Address>>;
}) {
  const { stepCompleted, shippingAddress } = useCheckout();

  const isEnabled = !dependantStep || stepCompleted[dependantStep];
  return (
    <div
      className={cn(
        "w-full ease-in-out duration-300 transition-opacity",
        isEnabled ? "opacity-100" : "opacity-20 pointer-events-none"
      )}
    >
      <ModuleTitle title={moduleTitle} />
      <AddressForm
        changeCallback={changeCallback}
        controlAddress={shippingAddress}
      />
    </div>
  );
}
