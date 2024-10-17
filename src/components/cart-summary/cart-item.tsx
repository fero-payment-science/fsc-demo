import { cleanString, formatAmount } from "@/lib/utils";
import Image from "next/image";
// import ItemQuantityPicker from "./item-quantity-picker";

export default function CartItem({ item }: { item: CartItemData }) {
  return (
    <div
      role="listitem"
      className="flex items-center gap-[10px] mb-[10px]"
      key={item.id}
    >
      <div style={{ position: "relative" }}>
        <Image
          alt={`${item.name} image`}
          height={70}
          width={70}
          className="min-w-[70px] max-w-[70px] min-h-[70px] max-h-[70px] object-cover rounded-[10px] border-2 border-[#cacaca]"
          src={item.image}
        />
        <div className="flex items-center justify-center absolute top-[-4px] right-[-10px] bg-gray-400 border text-white rounded-full text-xs h-[20px] w-[20px]">
          {item.quantity}
        </div>
      </div>
      <div className="flex-grow flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="min-w-[110px]">
            <h5 className="my-[5px] text-[15px] font-[500]">
              {cleanString(item.name)}
            </h5>
            <h6 className="my-[5px] text-sm font-[500]">
              {formatAmount(+item.price, "€")}
            </h6>
          </div>
          {/* <ItemQuantityPicker item={item} /> */}
        </div>
        <h5 className="m-0 text-sm font-[500]">
          {formatAmount(+item.price * item.quantity, "€")}
        </h5>
      </div>
    </div>
  );
}
