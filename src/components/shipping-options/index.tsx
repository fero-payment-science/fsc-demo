"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useCheckout } from "../../contexts/checkout-context";
import OptionsList from "./options-list";
import { cn } from "../../lib/utils";
import { shippingRates } from "@/lib/data";
import ModuleTitle from "../util-comps/module-title";

export default function ShippingOptions({
  dependantStep,
}: {
  dependantStep: keyof typeof stepCompleted;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const { stepCompleted } = useCheckout();

  const isEnabled = stepCompleted[dependantStep];

  useEffect(() => {
    if(!isEnabled) return;
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isEnabled]);

  return (
    <div
      data-testid="shipping-options"
      className={cn(
        "ease-in-out duration-300 transition-opacity",
        isEnabled ? "opacity-100" : "opacity-20 pointer-events-none"
      )}
    >
      <ModuleTitle title="Shipping Method" />
      <div className="w-full min-h-[120px] flex flex-col items-center justify-center gap-[2px] p-[2px] bg-[#dddddd]">
        {!isEnabled ? (
          <h4 data-testid="options-placeholder" className="text-sm">
            Enter your shipping address to view shipping methods
          </h4>
        ) : (
          <OptionsList loading={loading} availableMethods={shippingRates} />
        )}
      </div>
    </div>
  );
}
