"use client"
import dynamic from "next/dynamic";
import ShippingOptions from "../shipping-options";
import { useCheckout } from "@/contexts/checkout-context";
import BillingAddress from "../billing-address";
import SubmitBtn from "../submit-btn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import EmailInput from "../email-input";
import AddressModule from "../util-comps/address-module";
import PaymentElement from "../payment-element";
import spinner from "../../../public/loaders/spinner-grey.svg";
import Image from "next/image";

function CheckoutMain() {
  const { setShippingAddress, basketItems } = useCheckout();
  const router = useRouter();
  useEffect(() => {
    if(basketItems.length === 0) {
      router.push("/");
    }
  },[basketItems, router])

  return (
    <div className="grow h-full py-2 px-4 flex flex-col gap-4 pb-8">
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

export default dynamic(() => Promise.resolve(CheckoutMain), {
  ssr: false,
  loading: () => (
    <div className="grow h-[500px] py-2 px-4 flex flex-col justify-center items-center gap-4 pb-8">
      <Image
        alt={"loader"}
        data-testid="loader"
        className="!h-[40px]"
        src={spinner}
        height={40}
        width={40}
      />
    </div>
  ),
});