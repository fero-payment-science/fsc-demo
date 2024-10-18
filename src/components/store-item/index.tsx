"use client"
import { useCheckout } from "@/contexts/checkout-context";
import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import dynamic from "next/dynamic";

const AddToCartBtn = dynamic(() => import("./add-to-cart-btn"), { ssr: false, loading: () => <div className="w-full h-[40px]"/> });

export default function StoreItem({item}:{item: Product}){
    const { setBasketItems, basketItems } = useCheckout()
    
    const isInCart = basketItems.some((i) => i.id === item.id);
    const handleAddItem = () => {
        if (isInCart) return;
        setBasketItems((prev) => [...prev, {...item, quantity: 1}])
    }

    return (
      <div className="cursor-pointer w-full flex flex-col border shadow-md p-2 rounded-lg group">
        <div className="w-full h-[170px] relative rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            style={{ objectFit: "cover" }}
            className="group-hover:scale-[1.1] transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full flex flex-col gap-2 px-1 py-2">
          <div className="w-full flex justify-between">
            <h1 className="text-sm">{item.name}</h1>
            <p className="text-base font-semibold">
              {formatAmount(+item.price, "€")}
            </p>
          </div>
        </div>
        <AddToCartBtn handleAddItem={handleAddItem} isInCart={isInCart} />
      </div>
    );
};