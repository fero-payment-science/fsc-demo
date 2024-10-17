"use client"
import CartItem from "./cart-item";
import { useCheckout } from "../../contexts/checkout-context";
import { formatAmount } from "@/lib/utils";
import { calculateCartTotal } from "@/contexts/checkout-context/types";

export default function CartSummary() {
  const { basketItems } = useCheckout();
  const { selectedShipping } = useCheckout();
  const totalProducts = calculateCartTotal(basketItems);

  return (
    <>
    <div className="w-[420px]" />
    <div className="pointer-events-none absolute right-[1px] h-[calc(100%-85px)] w-[350px] bg-[#f1f1f1] rounded-br-md border-l border-l-[#cacaca] py-[30px] px-[40px]">
      {basketItems.map((item: CartItemData) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="py-[10px]">
        <div className="flex items-baseline justify-between w-full my-[20px] text-md">
          <h5>Subtotal</h5>
          <h5>{formatAmount(totalProducts, "€")}</h5>
        </div>
        <div className="flex items-baseline justify-between w-full my-[20px] text-md">
          <h5>Shipping</h5>
          <h5>
            {selectedShipping
              ? formatAmount(+selectedShipping.cost, "€")
              : "--"}
          </h5>
        </div>
        <div className="border-b border-black my-5" />
        <div className="flex items-baseline justify-between w-full my-[10px] text-xl font-semibold">
          <h2>Total</h2>
          <h2>
            {selectedShipping
              ? formatAmount(totalProducts + +selectedShipping.cost, "€")
              : "--"}
          </h2>
        </div>
      </div>
    </div>
    </>
  );
}
