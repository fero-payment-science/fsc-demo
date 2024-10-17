"use client";
import { useCheckout } from "@/contexts/checkout-context";
import { calculateCartTotal } from "@/contexts/checkout-context/types";
import { formatAmount } from "@/lib/utils";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Basket() {
  const [value, setValue] = useState<number>(0);

  const { basketItems } = useCheckout();
  const calculated = calculateCartTotal(basketItems);

  useEffect(() => {
    setValue(calculated);
  }, [calculated]);

  return (
    <div className={"flex items-center justify-between font-roboto w-[80px] ml-2"}>
      <div className="relative">
        <HiOutlineShoppingBag color={"var(--background)"} size={20} />
        <div className="absolute h-[15px] w-[15px] bg-white rounded-full bottom-[-5px] right-[-6px] text-xs font-bold text-primary flex justify-center items-center border border-gray-300">
          {basketItems.length}
        </div>
      </div>
      <p className="text-sm text-black relative ml-3 mr-1">
        {formatAmount(+value!, "€")}
      </p>
      {/* {showReset && <ResetBtn color="var(--background" size={20} />} */}
    </div>
  );
}
