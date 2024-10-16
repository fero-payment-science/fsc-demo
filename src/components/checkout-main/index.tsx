"use client"
import EmailInput from "../email-input";
import ShippingOptions from "../shipping-options";
import AddressModule from "../util-comps/address-module";
import { useCheckout } from "@/contexts/checkout-context";

export default function CheckoutMain() {
  const { setShippingAddress } = useCheckout();

  return (
    <div className="grow h-full py-2 px-6 flex flex-col gap-4 pb-8">
      <EmailInput />
      <AddressModule
        moduleTitle="Delivery"
        dependantStep="email"
        changeCallback={setShippingAddress}
      />
      <ShippingOptions dependantStep="address" />
    </div>
  );
}
