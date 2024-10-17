"use client"
import dynamic from "next/dynamic";
import EmailInput from "../email-input";
// import PaymentElement from "../payment-element";
import ShippingOptions from "../shipping-options";
import AddressModule from "../util-comps/address-module";
import { useCheckout } from "@/contexts/checkout-context";
import BillingAddress from "../billing-address";
import SubmitBtn from "../submit-btn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PaymentElement = dynamic(() => import("../payment-element"), {ssr: false});

export default function CheckoutMain() {
  const { setShippingAddress, basketItems } = useCheckout();
  const router = useRouter();
  useEffect(() => {
    if(basketItems.length === 0) {
      router.push("/");
    }
  },[basketItems, router])

  return (
    <div className="grow h-full py-2 px-6 flex flex-col gap-4 pb-8">
      <EmailInput />
      <AddressModule
        moduleTitle="Delivery"
        dependantStep="email"
        changeCallback={setShippingAddress}
      />
      <ShippingOptions dependantStep="address" />
      <PaymentElement dependantStep="shipping" />
      <BillingAddress dependantStep="payment" />
      <SubmitBtn dependantStep="payment" />
    </div>
  );
}
